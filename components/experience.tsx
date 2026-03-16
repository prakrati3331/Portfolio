import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "Artificial Intelligence and Machine Learning Intern",
    company: "EduSkills Google",
    period: "2026",
    description:
      "Worked on cutting-edge AI/ML projects as part of Google's internship program. Gained hands-on experience with large language models, neural networks, and machine learning algorithms. Contributed to developing and optimizing AI solutions while learning industry best practices in artificial intelligence.",
  },

  {
  icon: Briefcase,
  title: "Artificial Intelligence Intern",
  company: "Infosys Springboard",
  period: "2025-2026",
  description: "Completed a comprehensive internship focused on Artificial Intelligence and Machine Learning. Gained hands-on experience in developing AI/ML solutions, working with real-world datasets, and implementing various machine learning algorithms. Enhanced skills in data preprocessing, model training, and evaluation techniques.",
},

  {
    icon: Briefcase,
    title: "Cybersecurity Intern",
    company: "Cisco Networking Academy",
    period: "Mar 2025 – Aug 2025",
    description:
      "Gained practical insights into securing systems and performing vulnerability analysis. Earned Cisco Certified Badge in Networking & Cybersecurity Fundamentals.",
  },
  {
    icon: Briefcase,
    title: "Country Representative - Indian Delegate",
    company: "International Model United Nations (IMUN)",
    period: "Mar 2025 – May 2025",
    description:
      "Represented as a delegate in a global forum discussing international policy, cyber law, and digital safety. Enhanced global communication, diplomacy and analytical skills in high-pressure environments.",
  },
  {
    icon: Briefcase,
    title: "AWS Cloud Business Application Intern",
    company: "AWS EduSkills",
    period: "Oct 2025 - Dec 2025",
    description:
      "Participated in hands-on training for cloud infrastructure and services. Developed skills in deploying and managing applications on AWS cloud platform. Gained experience in cloud architecture and best practices for business solutions.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    company: "Oriental Institute of Science & Technology, Bhopal",
    period: "Aug 2023 – July 2027",
    description:
      "CGPA: 8.01 | Pursuing Computer Science degree with focus on AI, Machine Learning, and Software Development. Active in AI clubs and hackathons.",
  },
]

export function Experience() {
  return (
    <section className="relative py-32 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-primary mb-4" />
          <p className="text-xl text-muted-foreground">
            Professional journey in AI development and full-stack engineering
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <exp.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
