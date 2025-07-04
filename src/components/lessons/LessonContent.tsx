import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, CheckCircle, Youtube, ExternalLink, Bot } from 'lucide-react';
import { AIChat } from '@/components/ai/AIChat';
import { useAIChat } from '@/hooks/useAIChat';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface VideoContent {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
}

interface LessonContentProps {
  lesson: {
    id: string;
    title: string;
    content: string;
    questions: Question[];
    videos?: VideoContent[];
    youtubeRecommendations?: VideoContent[];
  };
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const LessonContent: React.FC<LessonContentProps> = ({ lesson, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [showVideos, setShowVideos] = useState(false);
  const { isChatVisible, isMinimized, toggleChat } = useAIChat();

  const isContentStep = currentStep === 0;
  const isVideoStep = currentStep === 1 && lesson.videos && lesson.videos.length > 0;
  const questionStartIndex = lesson.videos && lesson.videos.length > 0 ? 2 : 1;
  const currentQuestion = lesson.questions[currentStep - questionStartIndex];
  const totalSteps = lesson.questions.length + (lesson.videos && lesson.videos.length > 0 ? 2 : 1);
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep === 0) {
      // From content to videos (if available) or directly to questions
      setCurrentStep(1);
    } else if (isVideoStep) {
      // From videos to questions
      setCurrentStep(2);
    } else if (currentStep >= questionStartIndex && currentStep < totalSteps) {
      if (currentAnswer) {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(currentAnswer) }));
        
        if (currentStep === totalSteps - 1) {
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
      <Card className="max-w-4xl mx-auto animate-fade-in">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-4">
            <div></div>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <Button
              onClick={toggleChat}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Bot className="h-4 w-4" />
              Ask AI
            </Button>
          </div>
          <CardTitle className="animate-fade-in">Lesson Complete!</CardTitle>
          <CardDescription className="animate-fade-in">Great job completing "{lesson.title}"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center animate-scale-in">
            <div className="text-3xl font-bold text-green-600 mb-2">{score}%</div>
            <p className="text-muted-foreground">
              You answered {correct} out of {lesson.questions.length} questions correctly
            </p>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold">Review Your Answers:</h3>
            {lesson.questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4 hover-scale">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
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

          {lesson.youtubeRecommendations && lesson.youtubeRecommendations.length > 0 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-semibold flex items-center">
                <Youtube className="h-5 w-5 mr-2 text-red-600" />
                Continue Learning - Recommended Videos
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {lesson.youtubeRecommendations.map((video) => (
                  <Card key={video.id} className="hover-scale cursor-pointer transition-transform">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Youtube className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{video.duration}</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Videos open in YouTube. Continue your learning journey with these expert-recommended resources!
              </p>
            </div>
          )}

          <Button onClick={onBack} className="w-full">
            Back to Lessons
          </Button>
        </CardContent>

        {isChatVisible && (
          <AIChat
            lessonContext={`Lesson completed: ${lesson.title}. Score: ${score}%. Available for questions about the lesson content or next steps.`}
            isMinimized={isMinimized}
            onToggleMinimize={toggleChat}
          />
        )}
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleBack} className="hover-scale">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center gap-4">
          <Button
            onClick={toggleChat}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Bot className="h-4 w-4" />
            Need Help?
          </Button>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>
      </div>

      <Progress value={progress} className="h-2 animate-fade-in" />

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>{lesson.title}</CardTitle>
          <CardDescription>
            {isContentStep 
              ? 'Learn the concepts' 
              : isVideoStep 
                ? 'Watch educational videos'
                : `Question ${currentStep - questionStartIndex + 1} of ${lesson.questions.length}`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isContentStep ? (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            </div>
          ) : isVideoStep ? (
            <div className="space-y-6">
              <div className="text-center">
                <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg font-semibold mb-2">Educational Videos</h3>
                <p className="text-muted-foreground">Watch these videos to deepen your understanding</p>
              </div>
              
              {lesson.videos && lesson.videos.length > 0 && (
                <div className="grid gap-4">
                  {lesson.videos.map((video) => (
                    <Card key={video.id} className="hover-scale cursor-pointer transition-all border-2 hover:border-red-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Youtube className="h-8 w-8 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{video.title}</h4>
                            <p className="text-muted-foreground mb-3">{video.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-red-600">{video.duration}</span>
                              <Button size="sm" className="gap-2">
                                <Youtube className="h-4 w-4" />
                                Watch on YouTube
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Click the videos above to watch them on YouTube, then continue with the quiz below.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
              <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 hover-scale p-2 rounded transition-colors hover:bg-gray-50">
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
          disabled={!isContentStep && !isVideoStep && !currentAnswer}
          className="min-w-24 hover-scale"
        >
          {currentStep === totalSteps - 1 ? 'Complete' : 'Next'}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {isChatVisible && (
        <AIChat
          lessonContext={`Current lesson: ${lesson.title}. ${isContentStep ? 'Reading lesson content' : isVideoStep ? 'Watching videos' : `Answering question ${currentStep - questionStartIndex + 1}`}`}
          isMinimized={isMinimized}
          onToggleMinimize={toggleChat}
        />
      )}
    </div>
  );
};
