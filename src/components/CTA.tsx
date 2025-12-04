import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>
          
          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Launch Your
            <span className="text-gradient"> Tech Career?</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of students and graduates who have already transformed their career 
            journey with TechLaunch. Your dream job is just a few clicks away.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glow" size="xl">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Badges */}
          <p className="text-sm text-muted-foreground mt-8">
            Free to start · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
