import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, BarChart3 } from "lucide-react";

const ForCompanies = () => {
  const benefits = [
    {
      icon: Users,
      title: "Pre-Vetted Talent",
      description: "Access candidates who've already proven their skills through our assessment system.",
    },
    {
      icon: Zap,
      title: "Faster Hiring",
      description: "Reduce time-to-hire with integrated video interviews and skill-based screening tasks.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Our AI matching ensures you only see candidates who truly fit your requirements.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your hiring pipeline with detailed analytics and candidate insights.",
    },
  ];

  return (
    <section id="companies" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm text-muted-foreground">For Employers</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Find Your Next
              <span className="text-gradient"> Tech Star</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Access a pool of motivated, skilled graduates ready to make an impact. 
              Post freelance tasks, conduct interviews, and hire—all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start Hiring
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass rounded-xl p-5 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;
