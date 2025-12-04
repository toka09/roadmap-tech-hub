import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Junior Developer at Google",
      avatar: "SC",
      content: "TechLaunch completely transformed my job search. The personalized roadmap showed me exactly what skills I needed, and the AI CV builder helped me stand out. Landed my dream job within 3 months!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Data Analyst at Microsoft",
      avatar: "MJ",
      content: "As a recent graduate, I felt lost in the job market. TechLaunch's matching algorithm connected me with opportunities I didn't even know existed. The video interview feature made the process so smooth.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "UX Designer at Spotify",
      avatar: "PP",
      content: "The freelance tasks feature is brilliant! I completed a small project that showcased my skills, and the company hired me right after. It's the best way to prove yourself beyond just a resume.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Success
            <span className="text-gradient"> Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from graduates who launched their tech careers with TechLaunch.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="font-semibold text-primary-foreground text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
