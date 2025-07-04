
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, BookOpen, Youtube, PlayCircle } from 'lucide-react';

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
    videos?: Array<{ id: string; title: string; duration: string }>;
    youtubeRecommendations?: Array<{ id: string; title: string; duration: string }>;
  };
  onStartLesson: (lessonId: string) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, onStartLesson }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const hasVideoContent = lesson.videos && lesson.videos.length > 0;
  const hasRecommendations = lesson.youtubeRecommendations && lesson.youtubeRecommendations.length > 0;

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover-scale border-2 hover:border-primary/20 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight">{lesson.title}</CardTitle>
            <CardDescription className="line-clamp-2">{lesson.description}</CardDescription>
          </div>
          <Badge className={`${getDifficultyColor(lesson.difficulty)} border ml-2 flex-shrink-0`}>
            {lesson.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{lesson.topics.length} topics</span>
          </div>
          {hasVideoContent && (
            <div className="flex items-center space-x-1 text-red-600">
              <PlayCircle className="h-4 w-4" />
              <span>{lesson.videos!.length} video{lesson.videos!.length > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Topics covered:</h4>
          <div className="flex flex-wrap gap-1">
            {lesson.topics.map((topic, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs hover:bg-primary/5 transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {(hasVideoContent || hasRecommendations) && (
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-3 rounded-lg border border-red-100">
            <div className="flex items-center space-x-2 text-sm">
              <Youtube className="h-4 w-4 text-red-600 animate-bounce-slow" />
              <span className="font-medium text-red-800">
                {hasVideoContent && hasRecommendations 
                  ? 'Videos + YouTube recommendations included'
                  : hasVideoContent 
                    ? 'Educational videos included'
                    : 'YouTube recommendations included'
                }
              </span>
            </div>
          </div>
        )}

        {lesson.completed && lesson.score !== undefined && (
          <div className="space-y-2 animate-scale-in">
            <div className="flex justify-between text-sm">
              <span>Your Score</span>
              <span className={`font-medium ${lesson.score >= 70 ? 'text-green-600' : 'text-yellow-600'}`}>
                {lesson.score}%
              </span>
            </div>
            <Progress 
              value={lesson.score} 
              className={`h-2 transition-all duration-500 ${
                lesson.score >= 70 ? '[&>div]:bg-green-500' : '[&>div]:bg-yellow-500'
              }`} 
            />
          </div>
        )}

        <Button 
          onClick={() => onStartLesson(lesson.id)} 
          className="w-full hover-scale transition-all duration-200"
          variant={lesson.completed ? "outline" : "default"}
        >
          {lesson.completed ? (
            <>
              <BookOpen className="h-4 w-4 mr-2" />
              Review Lesson
            </>
          ) : (
            <>
              <PlayCircle className="h-4 w-4 mr-2" />
              Start Lesson
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
