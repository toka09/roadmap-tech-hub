import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Career Platform for Tech Talent
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Launch Your
            <span className="text-gradient"> Tech Career</span>
            <br />
            With Confidence
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            From personalized roadmaps to AI-powered CV writing and direct company connections — 
            we help students and graduates land their dream tech jobs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glow" size="xl">
              For Companies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: "50K+", label: "Active Users" },
              { value: "1,200+", label: "Partner Companies" },
              { value: "89%", label: "Placement Rate" },
              { value: "4.9★", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 hidden lg:block animate-float">
          <div className="glass p-4 rounded-xl">
            <Users className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 hidden lg:block animate-float-delayed">
          <div className="glass p-4 rounded-xl">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
