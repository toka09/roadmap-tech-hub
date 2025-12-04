import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Rocket, Search, MapPin, Clock, Building2, Filter, Bookmark,
  ChevronDown, Star, DollarSign, Briefcase, TrendingUp, Video, Settings, LogOut
} from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Jobs" },
    { id: "remote", label: "Remote" },
    { id: "fulltime", label: "Full-Time" },
    { id: "internship", label: "Internship" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "TechCorp",
      logo: "TC",
      location: "Remote",
      type: "Full-Time",
      salary: "$50k - $70k",
      match: 95,
      posted: "2 days ago",
      description: "We're looking for a passionate junior frontend developer to join our growing team...",
      skills: ["React", "TypeScript", "CSS"],
      benefits: ["Health Insurance", "Remote Work", "Learning Budget"],
    },
    {
      id: 2,
      title: "React Developer",
      company: "StartupXYZ",
      logo: "SX",
      location: "New York, NY",
      type: "Full-Time",
      salary: "$60k - $80k",
      match: 88,
      posted: "1 week ago",
      description: "Join our innovative team building the next generation of web applications...",
      skills: ["React", "Node.js", "GraphQL"],
      benefits: ["Stock Options", "Flexible Hours", "Gym Membership"],
    },
    {
      id: 3,
      title: "Frontend Engineer Intern",
      company: "BigTech Inc",
      logo: "BT",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$30/hour",
      match: 82,
      posted: "3 days ago",
      description: "Summer internship opportunity for aspiring frontend engineers...",
      skills: ["JavaScript", "HTML", "CSS"],
      benefits: ["Mentorship", "Housing Stipend", "Return Offer"],
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      logo: "IL",
      location: "Remote",
      type: "Full-Time",
      salary: "$70k - $95k",
      match: 78,
      posted: "5 days ago",
      description: "Build cutting-edge applications using modern technologies...",
      skills: ["React", "Python", "AWS"],
      benefits: ["Unlimited PTO", "Equipment Budget", "Conferences"],
    },
    {
      id: 5,
      title: "UI/UX Developer",
      company: "DesignFirst",
      logo: "DF",
      location: "Austin, TX",
      type: "Full-Time",
      salary: "$55k - $75k",
      match: 75,
      posted: "1 week ago",
      description: "Create beautiful, user-centric interfaces for our product suite...",
      skills: ["React", "Figma", "Tailwind CSS"],
      benefits: ["Creative Freedom", "Team Events", "Growth Path"],
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" ||
                         (selectedFilter === "remote" && job.location === "Remote") ||
                         (selectedFilter === "fulltime" && job.type === "Full-Time") ||
                         (selectedFilter === "internship" && job.type === "Internship");
    return matchesSearch && matchesFilter;
  });

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
            { icon: Briefcase, label: "Jobs", href: "/jobs", active: true },
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
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">
            Find Your <span className="text-gradient">Dream Job</span>
          </h1>
          <p className="text-muted-foreground">
            {filteredJobs.length} jobs matched to your profile
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-xl text-primary-foreground">
                    {job.logo}
                  </span>
                </div>

                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {job.match}% Match
                      </span>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Bookmark className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button variant="hero">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
