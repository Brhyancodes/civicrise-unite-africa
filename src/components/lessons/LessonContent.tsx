
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface LessonContentProps {
  lesson: {
    id: string;
    title: string;
    content: string;
    questions: Question[];
  };
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const LessonContent: React.FC<LessonContentProps> = ({ lesson, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const isContentStep = currentStep === 0;
  const currentQuestion = lesson.questions[currentStep - 1];
  const totalSteps = lesson.questions.length + 1;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep <= lesson.questions.length) {
      if (currentAnswer) {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(currentAnswer) }));
        
        if (currentStep === lesson.questions.length) {
          // Calculate score and show results
          const newAnswers = { ...answers, [currentQuestion.id]: parseInt(currentAnswer) };
          const correct = lesson.questions.filter(q => newAnswers[q.id] === q.correctAnswer).length;
          const score = Math.round((correct / lesson.questions.length) * 100);
          setShowResults(true);
          onComplete(score);
        } else {
          setCurrentStep(currentStep + 1);
          setCurrentAnswer('');
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentAnswer('');
    } else {
      onBack();
    }
  };

  if (showResults) {
    const correct = lesson.questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const score = Math.round((correct / lesson.questions.length) * 100);

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle>Lesson Complete!</CardTitle>
          <CardDescription>Great job completing "{lesson.title}"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{score}%</div>
            <p className="text-muted-foreground">
              You answered {correct} out of {lesson.questions.length} questions correctly
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Review Your Answers:</h3>
            {lesson.questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                      isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {index + 1}
                    </span>
                    <p className="font-medium">{question.question}</p>
                  </div>
                  <div className="ml-8 text-sm text-muted-foreground">
                    <p><strong>Your answer:</strong> {question.options[userAnswer]}</p>
                    {!isCorrect && (
                      <p><strong>Correct answer:</strong> {question.options[question.correctAnswer]}</p>
                    )}
                    <p className="mt-2 italic">{question.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button onClick={onBack} className="w-full">
            Back to Lessons
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </div>
      </div>

      <Progress value={progress} className="h-2" />

      <Card>
        <CardHeader>
          <CardTitle>{lesson.title}</CardTitle>
          <CardDescription>
            {isContentStep ? 'Learn the concepts' : `Question ${currentStep} of ${lesson.questions.length}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isContentStep ? (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
              <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button 
          onClick={handleNext}
          disabled={!isContentStep && !currentAnswer}
          className="min-w-24"
        >
          {currentStep === lesson.questions.length ? 'Complete' : 'Next'}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
