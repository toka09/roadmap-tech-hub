import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, FileText, Map, Video, Briefcase, Bell, Settings, LogOut,
  ChevronRight, Star, Clock, MapPin, Building2, TrendingUp, CheckCircle2,
  BookOpen, Target, Award
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("techlaunch_user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      // Demo user if no registration
      setUser({
        fullName: "Demo User",
        email: "demo@techlaunch.dev",
        skills: ["JavaScript", "React", "TypeScript"],
        experience: "fresh",
        targetRole: "Frontend Developer"
      });
    }
  }, []);

  const roadmapSteps = [
    { title: "Complete Profile", completed: true, progress: 100 },
    { title: "Build Your CV", completed: false, progress: 30 },
    { title: "Learn React Advanced", completed: false, progress: 60 },
    { title: "Apply to Jobs", completed: false, progress: 0 },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$50k - $70k",
      match: 95,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "React Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$60k - $80k",
      match: 88,
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Frontend Engineer",
      company: "BigTech Inc",
      location: "San Francisco, CA",
      salary: "$70k - $90k",
      match: 82,
      posted: "3 days ago",
    },
  ];

  const quickActions = [
    { icon: FileText, label: "Build CV", href: "/cv-builder", color: "text-primary" },
    { icon: Map, label: "My Roadmap", href: "/roadmap", color: "text-accent" },
    { icon: Briefcase, label: "Browse Jobs", href: "/jobs", color: "text-primary" },
    { icon: Video, label: "Interviews", href: "/interviews", color: "text-accent" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-4 hidden lg:flex flex-col">
        <a href="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">TechLaunch</span>
        </a>

        <nav className="flex-1 space-y-1">
          {[
            { icon: TrendingUp, label: "Dashboard", href: "/dashboard", active: true },
            { icon: FileText, label: "CV Builder", href: "/cv-builder" },
            { icon: Map, label: "Roadmap", href: "/roadmap" },
            { icon: Briefcase, label: "Jobs", href: "/jobs" },
            { icon: Video, label: "Interviews", href: "/interviews" },
            { icon: BookOpen, label: "Learning", href: "/learning" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border pt-4 space-y-1">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground w-full">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem("techlaunch_user");
              navigate("/");
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold">
              Welcome back, <span className="text-gradient">{user.fullName.split(' ')[0]}</span>!
            </h1>
            <p className="text-muted-foreground mt-1">
              Let's continue building your path to {user.targetRole}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] flex items-center justify-center text-primary-foreground font-bold">3</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="font-semibold text-primary-foreground text-sm">
                {user.fullName.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.href}
              className="glass rounded-xl p-5 hover:shadow-card transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <span className="font-semibold text-foreground">{action.label}</span>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Roadmap Progress */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Your Roadmap
              </h2>
              <Link to="/roadmap" className="text-sm text-primary hover:underline flex items-center gap-1">
                View Full Roadmap
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                  }`}>
                    {step.completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={step.completed ? "text-muted-foreground line-through" : "font-medium"}>
                        {step.title}
                      </span>
                      <span className="text-sm text-muted-foreground">{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Completion */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-accent" />
              Profile Strength
            </h2>
            
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56 * 0.65} ${2 * Math.PI * 56}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-3xl font-bold">65%</span>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mb-4">
              Complete your profile to get better job matches
            </p>
            
            <Button variant="glow" className="w-full">
              Complete Profile
            </Button>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Recommended Jobs
            </h2>
            <Link to="/jobs" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All Jobs
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="glass rounded-xl p-5 hover:shadow-card transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {job.match}% Match
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{job.company}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.posted}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{job.salary}</span>
                  <Button variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
