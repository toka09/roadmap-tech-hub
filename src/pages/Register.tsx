import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, ArrowRight, ArrowLeft, Check, User, GraduationCap, Target, Briefcase } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    education: "",
    skills: [] as string[],
    experience: "",
    targetRole: "",
  });

  const skillOptions = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "Java", "SQL", "Git", "AWS", "Docker", "Machine Learning",
    "UI/UX Design", "Data Analysis", "Mobile Development"
  ];

  const experienceLevels = [
    { value: "student", label: "Student", desc: "Currently studying" },
    { value: "fresh", label: "Fresh Graduate", desc: "0-1 years" },
    { value: "junior", label: "Junior", desc: "1-3 years" },
    { value: "mid", label: "Mid-Level", desc: "3-5 years" },
  ];

  const targetRoles = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer",
    "Data Scientist", "UI/UX Designer", "DevOps Engineer",
    "Mobile Developer", "Product Manager", "QA Engineer"
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = () => {
    // Store in localStorage for demo
    localStorage.setItem("techlaunch_user", JSON.stringify(formData));
    navigate("/dashboard");
  };

  const steps = [
    { icon: User, label: "Basic Info" },
    { icon: GraduationCap, label: "Skills" },
    { icon: Briefcase, label: "Experience" },
    { icon: Target, label: "Goals" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
        <a href="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">TechLaunch</span>
        </a>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                step > i + 1 ? "bg-accent text-accent-foreground" :
                step === i + 1 ? "bg-primary text-primary-foreground" :
                "bg-secondary text-muted-foreground"
              }`}>
                {step > i + 1 ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 lg:w-16 h-1 mx-2 rounded ${
                  step > i + 1 ? "bg-accent" : "bg-secondary"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-md">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-muted-foreground mb-8">Start your journey to landing your dream tech job.</p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Skills */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl font-bold mb-2">Your Skills</h1>
              <p className="text-muted-foreground mb-8">Select the skills you have or are learning.</p>
              
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.skills.includes(skill)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Experience */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl font-bold mb-2">Experience Level</h1>
              <p className="text-muted-foreground mb-8">Tell us about your professional experience.</p>
              
              <div className="space-y-3">
                {experienceLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setFormData({ ...formData, experience: level.value })}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      formData.experience === level.value
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                    }`}
                  >
                    <div className="font-semibold">{level.label}</div>
                    <div className="text-sm text-muted-foreground">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Target Role */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl font-bold mb-2">Career Goal</h1>
              <p className="text-muted-foreground mb-8">What role are you aiming for?</p>
              
              <div className="grid grid-cols-2 gap-3">
                {targetRoles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setFormData({ ...formData, targetRole: role })}
                    className={`p-4 rounded-xl text-sm font-medium transition-all ${
                      formData.targetRole === role
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            {step < 4 ? (
              <Button variant="hero" className="flex-1" onClick={() => setStep(step + 1)}>
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button variant="hero" className="flex-1" onClick={handleSubmit}>
                Launch My Career
                <Rocket className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }} />
        
        <div className="relative z-10 text-center p-12">
          <h2 className="font-display text-4xl font-bold mb-4">
            Join <span className="text-gradient">50,000+</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            tech professionals who launched their careers with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
