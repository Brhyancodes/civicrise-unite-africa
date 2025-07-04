import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Trophy, BookOpen, Users, Target, ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIChat } from '@/components/ai/AIChat';
import { useAIChat } from '@/hooks/useAIChat';

interface UserProgress {
  id: string;
  lesson_id: string;
  lesson_title: string;
  completed_at: string;
  score: number;
}

export const Dashboard = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress[]>([]);
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
        .select('*')
        .eq('user_id', user?.id)
        .order('completed_at', { ascending: false });

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalLessons = 20; // This would come from your lesson configuration
  const completedLessons = progress.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;
  const averageScore = progress.length > 0 
    ? progress.reduce((sum, p) => sum + (p.score || 0), 0) / progress.length 
    : 0;

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.user_metadata?.full_name || 'Civic Leader'}!</h1>
          <p className="text-muted-foreground">Continue your journey to transform communities</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={toggleChat}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Bot className="h-4 w-4" />
            Ask AI Assistant
          </Button>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Level {Math.floor(completedLessons / 5) + 1}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedLessons}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalLessons} total lessons
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(averageScore)}%</div>
            <p className="text-xs text-muted-foreground">
              across all completed lessons
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Impact</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              projects initiated
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
            <p className="text-xs text-muted-foreground">
              towards civic mastery
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Your journey through civic education</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Completion</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Level Progress</span>
                <span>{(completedLessons % 5) * 20}%</span>
              </div>
              <Progress value={(completedLessons % 5) * 20} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Your latest completed lessons</CardDescription>
          </CardHeader>
          <CardContent>
            {progress.length > 0 ? (
              <div className="space-y-3">
                {progress.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{item.lesson_title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.completed_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline">{item.score || 0}%</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  No lessons completed yet. Start your journey today!
                </p>
                <Button asChild>
                  <Link to="/lessons" className="flex items-center space-x-2">
                    <span>Start Learning</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isChatVisible && (
        <AIChat
          lessonContext="Dashboard - General civic education assistance"
          isMinimized={isMinimized}
          onToggleMinimize={toggleChat}
        />
      )}
    </div>
  );
};
