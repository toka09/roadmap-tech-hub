import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Rocket, FileText, Sparkles, Download, Eye, Plus, Trash2,
  User, Briefcase, GraduationCap, Award, TrendingUp, Video, Settings, LogOut
} from "lucide-react";

const CVBuilder = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [cvData, setCvData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [
      { id: 1, title: "", company: "", duration: "", description: "" }
    ],
    education: [
      { id: 1, degree: "", school: "", year: "", gpa: "" }
    ],
    skills: [] as string[],
  });

  const [newSkill, setNewSkill] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
  ];

  const handleAIGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setCvData(prev => ({
        ...prev,
        personal: {
          ...prev.personal,
          summary: "Highly motivated Frontend Developer with a passion for creating intuitive user experiences. Proficient in React, TypeScript, and modern web technologies. Strong problem-solving skills combined with excellent communication abilities. Seeking to leverage my technical expertise and creativity to contribute to innovative projects."
        }
      }));
      setIsGenerating(false);
    }, 2000);
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now(), title: "", company: "", duration: "", description: "" }]
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now(), degree: "", school: "", year: "", gpa: "" }]
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setCvData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-4 hidden lg:flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">TechLaunch</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {[
            { icon: TrendingUp, label: "Dashboard", href: "/dashboard" },
            { icon: FileText, label: "CV Builder", href: "/cv-builder", active: true },
            { icon: Briefcase, label: "Jobs", href: "/jobs" },
            { icon: Video, label: "Interviews", href: "/interviews" },
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
          <Link 
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">
              AI <span className="text-gradient">CV Builder</span>
            </h1>
            <p className="text-muted-foreground">
              Create a professional, ATS-optimized resume in minutes
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="hero">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-3 glass rounded-2xl p-6">
            {/* Personal Info */}
            {activeSection === "personal" && (
              <div className="animate-fade-in space-y-6">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={cvData.personal.fullName}
                      onChange={(e) => setCvData({
                        ...cvData,
                        personal: { ...cvData.personal, fullName: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={cvData.personal.email}
                      onChange={(e) => setCvData({
                        ...cvData,
                        personal: { ...cvData.personal, email: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={cvData.personal.phone}
                      onChange={(e) => setCvData({
                        ...cvData,
                        personal: { ...cvData.personal, phone: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="New York, NY"
                      value={cvData.personal.location}
                      onChange={(e) => setCvData({
                        ...cvData,
                        personal: { ...cvData.personal, location: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Button
                      variant="glow"
                      size="sm"
                      onClick={handleAIGenerate}
                      disabled={isGenerating}
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      {isGenerating ? "Generating..." : "AI Generate"}
                    </Button>
                  </div>
                  <Textarea
                    id="summary"
                    placeholder="Write a compelling summary about yourself..."
                    value={cvData.personal.summary}
                    onChange={(e) => setCvData({
                      ...cvData,
                      personal: { ...cvData.personal, summary: e.target.value }
                    })}
                    className="min-h-[120px]"
                  />
                </div>
              </div>
            )}

            {/* Experience */}
            {activeSection === "experience" && (
              <div className="animate-fade-in space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Work Experience
                  </h2>
                  <Button variant="outline" size="sm" onClick={addExperience}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Experience
                  </Button>
                </div>

                {cvData.experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 bg-secondary/30 rounded-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Experience {index + 1}
                      </span>
                      {cvData.experience.length > 1 && (
                        <button
                          onClick={() => setCvData({
                            ...cvData,
                            experience: cvData.experience.filter(e => e.id !== exp.id)
                          })}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Job Title</Label>
                        <Input placeholder="Frontend Developer" className="mt-2" />
                      </div>
                      <div>
                        <Label>Company</Label>
                        <Input placeholder="TechCorp Inc" className="mt-2" />
                      </div>
                      <div>
                        <Label>Duration</Label>
                        <Input placeholder="Jan 2022 - Present" className="mt-2" />
                      </div>
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Describe your responsibilities and achievements..."
                        className="mt-2 min-h-[80px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeSection === "education" && (
              <div className="animate-fade-in space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </h2>
                  <Button variant="outline" size="sm" onClick={addEducation}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Education
                  </Button>
                </div>

                {cvData.education.map((edu, index) => (
                  <div key={edu.id} className="p-4 bg-secondary/30 rounded-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Education {index + 1}
                      </span>
                      {cvData.education.length > 1 && (
                        <button
                          onClick={() => setCvData({
                            ...cvData,
                            education: cvData.education.filter(e => e.id !== edu.id)
                          })}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Degree</Label>
                        <Input placeholder="B.S. Computer Science" className="mt-2" />
                      </div>
                      <div>
                        <Label>School</Label>
                        <Input placeholder="University of Technology" className="mt-2" />
                      </div>
                      <div>
                        <Label>Year</Label>
                        <Input placeholder="2020 - 2024" className="mt-2" />
                      </div>
                      <div>
                        <Label>GPA (Optional)</Label>
                        <Input placeholder="3.8" className="mt-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeSection === "skills" && (
              <div className="animate-fade-in space-y-6">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Skills
                </h2>

                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button variant="outline" onClick={addSkill}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cvData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary flex items-center gap-2"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="hover:text-destructive"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {cvData.skills.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                      Add your technical and soft skills to make your CV stand out
                    </p>
                  )}
                </div>

                <div className="p-4 bg-accent/10 rounded-xl">
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI Suggestions
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your target role, consider adding these skills:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "Git", "Agile", "REST APIs"].map((skill) => (
                      <button
                        key={skill}
                        onClick={() => {
                          if (!cvData.skills.includes(skill)) {
                            setCvData(prev => ({
                              ...prev,
                              skills: [...prev.skills, skill]
                            }));
                          }
                        }}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
                        disabled={cvData.skills.includes(skill)}
                      >
                        + {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CVBuilder;
