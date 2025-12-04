import { FileText, Map, Video, Code2, Brain, Building2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI CV Builder",
      description: "Create stunning, ATS-optimized resumes in minutes with our AI-powered CV writing tool that highlights your strengths.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Map,
      title: "Personalized Roadmaps",
      description: "Get a customized learning path based on your skills, goals, and the job market demands in your target field.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Video,
      title: "Video Interviews",
      description: "Connect directly with hiring managers through our integrated video interview platform for seamless screening.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Code2,
      title: "Freelance Tasks",
      description: "Prove your skills with real-world micro-projects from companies as part of their screening process.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: FileText,
      title: "Smart Job Matching",
      description: "Our AI analyzes your profile to match you with the most suitable opportunities in the tech industry.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Building2,
      title: "Company Insights",
      description: "Access detailed company profiles, culture insights, and employee reviews to make informed decisions.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit designed to help you navigate from student to professional 
            in the competitive tech industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
