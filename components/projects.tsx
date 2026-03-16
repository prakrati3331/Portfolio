"use client"

import { 
  Brain, 
  GitBranch, 
  BarChart3, 
  MessageSquare, 
  Users, 
  Server, 
  Code2, 
  Laptop, 
  Cloud,
  BookOpen,
  Award
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    title: "Mitigating Educational Decision Uncertainty Through ML-LLM Integration",
    subtitle: "Academic Guidance System with AI/ML & LLMs",
    tech: [
      "Python", "scikit-learn", "XGBoost", "Pandas", "NumPy", 
      "FastAPI", "Flask", "Mistral LLM", "SQLite/MySQL"
    ],
    description: "A comprehensive educational guidance system that helps students make informed academic decisions using AI/ML and LLMs.",
    highlights: [
      "Built 6 specialized ML models for academic stream & course prediction with 91%–98% accuracy",
      "Designed a Hybrid Recommendation Engine combining multiple filtering approaches",
      "Integrated psychometric & aptitude assessment modules for personalization",
      "Implemented dropout risk prediction using academic, behavioral, and emotional indicators",
      "Developed LLM-powered advisory agent (Mistral) for human-like explanations",
      "Created interactive web dashboard with real-time analytics and visual insights"
    ],
    role: "Team Lead & Full-Stack AI Developer",
    githubUrl: "https://github.com/prakrati3331/Mitigating-Educational-Uncertainty-With-Machine-Intelligence-in-Student-Advising",
    additionalLinks: [
    { label: "Project Report", url: "https://github.com/prakrati3331/Mitigating-Educational-Uncertainty-With-Machine-Intelligence-in-Student-Advising/blob/main/Main%20Minor%20Project%20Report%20(Phase%201).pdf" },
    { label: "Project PPT", url: "https://github.com/prakrati3331/Mitigating-Educational-Uncertainty-With-Machine-Intelligence-in-Student-Advising/blob/main/AI_in_education/MProjectPhase2.pptx" }
  ],
    icon: Brain
  },
  {
    title: "QubitX Hackathon Winner – AI-Driven Hackathon Platform",
    subtitle: "National Hackathon 2025 | GL Bajaj, Mathura",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Python", "Gen-AI", "Agentic AI", "VR360"],
    description: "Revolutionary platform that transformed hackathon participation by providing curated resources, intelligent mentorship matching, and real-time collaboration tools. Integrated advanced AI features for participant guidance and project tracking.",
    role: "Full-stack architect: Built entire platform from frontend to AI backend, implemented real-time team matching, project tracking, and resource filtering features",
    githubUrl: "https://github.com/prakrati3331/HackEase",
  additionalLinks: [
    { label: "VR360 Version", url: "https://github.com/prakrati3331/VR360-HackEase" }
  ],
    icon: Laptop
  },
  {
    title: "Network Anomaly Detection System",
    subtitle: "Real-time Monitoring & Analysis Platform",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Joblib", "Tailwind CSS", "Chart.js"],
    description: "Comprehensive network security solution providing real-time anomaly detection and monitoring with interactive visualizations.",
    highlights: [
      "Real-time network traffic processing with ML-powered anomaly detection",
      "Interactive web dashboard with real-time and historical analytics",
      "REST API integration for detection results and monitoring",
      "Visualization of anomalies using interactive charts and indicators",
      "Alerting system with severity classification"
    ],
    role: "Lead Developer: Designed ML models, architected real-time processing pipeline, and developed the dashboard",
    githubUrl: "https://github.com/prakrati3331/Network-Anomaly-Detection-System-Real-time-Monitoring-Analysis",
    icon: Server
  },
  {
    title: "AI Tutor Agent & Quiz Generator",
    subtitle: "Personalized Learning with LangChain & LLaMA",
    tech: ["LangChain", "LLaMA", "CrewAI", "OpenAI", "FastAPI", "Streamlit", "Python"],
    description: "AI-powered tutoring system that generates personalized quizzes and provides interactive learning experiences.",
    highlights: [
      "Dynamic quiz generation based on selected topics",
      "Personalized tutoring using multiple AI models",
      "Interactive web interface with real-time feedback",
      "Detailed topic plans and progress tracking",
      "Modular architecture for easy expansion"
    ],
    role: "Full-stack AI Developer: Implemented AI agents, designed API, and built the interactive UI",
    githubUrl: "https://github.com/prakrati3331/AI-Tutor-Agent-Quiz-Generator-using-LangChain-LLaMA-CrewAI-and-OpenAI",
    icon: BookOpen
  },
  {
    title: "AI Trip Planning Agent",
    subtitle: "Smart Travel Itinerary Generator",
    tech: ["CrewAI", "LangChain", "OpenAI", "Streamlit", "Python"],
    description: "Intelligent trip planning system that creates personalized travel itineraries based on user preferences.",
    highlights: [
      "AI-powered destination recommendations",
      "Custom day-by-day itineraries",
      "Budget planning and cost estimation",
      "Local insights for activities and attractions",
      "User-friendly Streamlit interface"
    ],
    role: "Lead Developer: Designed AI agent workflow and implemented the recommendation engine",
    githubUrl: "https://github.com/prakrati3331/AI-Driven-Trip-Planning-Agent-using-CrewAI-LangChain-OpenAI",
    icon: Users
  },
  {
    title: "Agentic Marketing Crew",
    subtitle: "AI-Powered Autonomous Marketing Team",
    tech: ["CrewAI", "Python", "Jupyter", "LangChain", "OpenAI"],
    description: "Autonomous AI agents that function as a complete marketing team, handling planning and content creation.",
    highlights: [
      "Multi-agent collaboration for marketing tasks",
      "Autonomous campaign planning and execution",
      "Content creation and strategy development",
      "Jupyter-based development environment",
      "Modular architecture for adding new capabilities"
    ],
    role: "AI Engineer: Developed agent workflows and integration logic",
    githubUrl: "https://github.com/prakrati3331/An-Agentic-Marketing-Crew-",
    icon: MessageSquare
  },
  {
    title: "AquaLytics",
    subtitle: "Rainwater Harvesting Intelligence Platform",
    tech: ["Python", "Machine Learning", "Geospatial Analysis", "Streamlit", "Pandas", "Scikit-learn"],
    description: "Comprehensive platform for analyzing and optimizing rainwater harvesting and artificial recharge systems across India.",
    highlights: [
      "ML-powered aquifer type prediction",
      "Location-based rainwater harvesting analysis",
      "Interactive visualization of water resources",
      "Roof-type optimization for water collection",
      "State-wide coverage for all Indian states"
    ],
    role: "Data Scientist & Full-stack Developer: Developed ML models and geospatial analysis tools",
    githubUrl: "https://github.com/prakrati3331/AquaLytics-Real-Time-Rainwater-Harvesting-Artificial-Recharge-Intelligence-Platform",
    additionalLinks: [
    { label: "Project PPT", url: "https://github.com/prakrati3331/AquaLytics-Real-Time-Rainwater-Harvesting-Artificial-Recharge-Intelligence-Platform/blob/main/RWHS%20PPT.pptx" }
  ],
    icon: Cloud
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2a2bf7] to-[#8b49ff] mx-auto" />
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-background/50 hover:to-muted/5"
            >
              <CardHeader className="pb-4 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <CardTitle className="text-xl md:text-2xl font-semibold group-hover:text-primary/90 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitBranch className="h-4 w-4" />
                          <span>View on GitHub</span>
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                    <p className="mt-2 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground/90">
                      <BarChart3 className="h-5 w-5" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2 pl-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground/90">
                    <Code2 className="h-5 w-5" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Role: </span>
                  <span className="group-hover:text-foreground/90 transition-colors duration-300">
                    {project.role}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}