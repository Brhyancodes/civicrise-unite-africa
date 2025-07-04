
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, Users, BookOpen } from 'lucide-react';

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    topics: string[];
    completed?: boolean;
    score?: number;
  };
  onStartLesson: (lessonId: string) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, onStartLesson }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg">{lesson.title}</CardTitle>
            <CardDescription>{lesson.description}</CardDescription>
          </div>
          <Badge className={getDifficultyColor(lesson.difficulty)}>
            {lesson.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{lesson.topics.length} topics</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Topics covered:</h4>
          <div className="flex flex-wrap gap-1">
            {lesson.topics.map((topic, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {lesson.completed && lesson.score !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Your Score</span>
              <span className="font-medium">{lesson.score}%</span>
            </div>
            <Progress value={lesson.score} className="h-2" />
          </div>
        )}

        <Button 
          onClick={() => onStartLesson(lesson.id)} 
          className="w-full"
          variant={lesson.completed ? "outline" : "default"}
        >
          {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
        </Button>
      </CardContent>
    </Card>
  );
};
