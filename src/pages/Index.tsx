import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Play, Users, Smartphone, Globe, Star, ArrowRight, CheckCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              🌍 For Young Africans Aged 15-25
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              CivicRise
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              Rise. Lead. Transform.
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Africa's first youth-driven civic platform that turns learning into action. 
              Gamified civic education meets future-ready skills development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                <Link to="/auth">
                  <Play className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Young Leaders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-300">African Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Communities Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Offline</div>
              <div className="text-gray-600 dark:text-gray-300">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* User Story Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-orange-50 dark:from-gray-700 dark:to-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Amina's Story</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From passionate youth to community leader - see how CivicRise transforms lives
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <CardTitle className="text-2xl">Amina, 19, Kibera, Nairobi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-700 dark:text-gray-300">Before CivicRise:</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Passionate about community issues but felt disconnected from formal politics. 
                    Had entrepreneurial dreams but lacked digital skills and civic knowledge.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-600">After CivicRise:</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learned governance through games, earned digital skills, launched a waste management 
                    initiative, and now trains others while considering local office.
                  </p>
                </div>
              </div>
              <Separator />
              <blockquote className="text-center italic text-lg text-gray-700 dark:text-gray-300 border-l-4 border-orange-400 pl-6">
                "CivicRise didn't just teach me about government—it showed me I AM the government. 
                My community, my responsibility, my power."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How CivicRise Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Gamified learning that creates real-world impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Gamified Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Earn badges, level up, and compete with friends while mastering civic knowledge 
                  and digital skills through interactive challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Mobile-First & Offline</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access content on low-data connections, download for offline use, 
                  and learn in multiple African languages wherever you are.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Community Action</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with mentors, join local challenges, and implement real solutions 
                  in your community with peer support and guidance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Ubuntu Tech Values</h2>
            <p className="text-xl opacity-90">Digital community where "I am because we are"</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ubuntu Tech</h3>
              <p className="text-lg opacity-90">
                Digital community rooted in African philosophy where individual growth 
                strengthens the collective.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accessible Excellence</h3>
              <p className="text-lg opacity-90">
                World-class civic education and skills training that reaches every 
                young African, regardless of location or resources.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Action-Oriented Impact</h3>
              <p className="text-lg opacity-90">
                Learning that transforms communities through practical application 
                and measurable social change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Rise?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of young Africans who are transforming their communities. 
            Your journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-lg">
              <Link to="/auth">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              Join Our Community
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Free to join • Available offline • Multilingual support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CivicRise</h3>
            <p className="text-gray-400 mb-6">
              Empowering young Africans to become informed leaders who transform their communities.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Features</a>
              <a href="#" className="text-gray-400 hover:text-white">Community</a>
              <a href="#" className="text-gray-400 hover:text-white">Support</a>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-sm text-gray-500">
              © 2024 CivicRise. Made with ❤️ for African youth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
