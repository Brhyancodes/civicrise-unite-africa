import React, { useState, useEffect } from 'react';
import { LessonCard } from '@/components/lessons/LessonCard';
import { LessonContent } from '@/components/lessons/LessonContent';
import { lessons } from '@/data/lessons';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { AIChat } from '@/components/ai/AIChat';
import { useAIChat } from '@/hooks/useAIChat';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

interface UserProgress {
  lesson_id: string;
  score: number;
  completed_at: string;
}

const Lessons = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { isChatVisible, isMinimized, toggleChat } = useAIChat();

  useEffect(() => {
    if (user) {
      fetchUserProgress();
    }
  }, [user]);

  const fetchUserProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('lesson_id, score, completed_at')
        .eq('user_id', user?.id);

      if (error) throw error;
      setUserProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  const handleCompleteLesson = async (score: number) => {
    if (!user || !selectedLesson) return;

    try {
      const lesson = lessons.find(l => l.id === selectedLesson);
      if (!lesson) return;

      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          lesson_id: selectedLesson,
          lesson_title: lesson.title,
          score: score,
          completed_at: new Date().toISOString()
        });

      if (error) throw error;

      toast({
        title: "Lesson completed!",
        description: `You scored ${score}% on "${lesson.title}"`,
      });

      // Refresh progress
      await fetchUserProgress();
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Error",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    if (!lesson) return null;

    return (
      <div className="container mx-auto p-6">
        <LessonContent
          lesson={lesson}
          onComplete={handleCompleteLesson}
          onBack={handleBackToLessons}
        />
      </div>
    );
  }

  const lessonsWithProgress = lessons.map(lesson => {
    const progress = userProgress.find(p => p.lesson_id === lesson.id);
    return {
      ...lesson,
      completed: !!progress,
      score: progress?.score
    };
  });

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Civic Education Lessons</h1>
          <p className="text-muted-foreground mt-2">
            Build your civic knowledge and skills through interactive lessons
          </p>
        </div>
        <Button
          onClick={toggleChat}
          variant="outline"
          className="gap-2"
        >
          <Bot className="h-4 w-4" />
          Ask AI Assistant
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessonsWithProgress.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onStartLesson={handleStartLesson}
          />
        ))}
      </div>

      {isChatVisible && (
        <AIChat
          lessonContext="Lesson selection page - Help users choose appropriate lessons and understand civic education topics"
          isMinimized={isMinimized}
          onToggleMinimize={toggleChat}
        />
      )}
    </div>
  );
};

export default Lessons;
