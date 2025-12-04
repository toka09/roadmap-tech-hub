import { UserPlus, Target, FileCheck, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and tell us about your skills, experience, and career goals. Our AI will analyze your data to understand your unique potential.",
    },
    {
      icon: Target,
      number: "02",
      title: "Get Your Roadmap",
      description: "Receive a personalized learning path showing exactly what skills to develop and steps to take for your target role.",
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Build Your CV",
      description: "Use our AI CV builder to create a professional, ATS-friendly resume that highlights your strengths and matches job requirements.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Land Your Dream Job",
      description: "Apply to matched positions, complete screening tasks, and interview directly with companies through our platform.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Path to
            <span className="text-gradient"> Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform your career journey and land the tech job you deserve.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-display text-4xl font-bold text-muted/50">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
