"use client"

import { BadgeCheck, Code, ShieldCheck, Cloud, Database, Cpu, BrainCircuit, Bot, CpuIcon, Lock, Brain, Award, BookOpen, Users, Code2, Server, CloudLightning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  // Oracle Certifications
  {
    icon: Bot,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    description: "Demonstrated expertise in Oracle Cloud Infrastructure's generative AI services, including model deployment, fine-tuning, and integration of AI solutions in enterprise environments.",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=BF47DBF6F7C1921BE87D58DDD77F2DD02A1F59E7B8256BE77825EC3166AE266E"
  },
  {
    icon: CpuIcon,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    description: "Validated foundational knowledge of AI and machine learning concepts, Oracle Cloud AI services, and their practical applications in business solutions.",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4A56D82F66002DE5F44A1414CFAEED65DA510957EAC1FE44D752D227F3165BF9"
  },
  
  // Cisco Cybersecurity Certificate
  {
    icon: Lock,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Nov 2024",
    description: "Gained fundamental understanding of cybersecurity concepts, threats, and best practices for protecting digital assets and networks.",
    credentialUrl: "https://www.credly.com/badges/35105ab9-c7f3-4eb0-8903-b7d5d8017dc4/linked_in_profile"
  },

  // AWS Certifications
  {
    icon: CloudLightning,
    title: "Generative AI for Executives",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    description: "Gained executive-level understanding of generative AI concepts, use cases, and business applications on AWS cloud platform.",
    credentialUrl: "https://skillbuilder.aws/learn/9EBNY921AD/generative-ai-for-executives/YF6GW2BT1E"
  },
  {
    icon: Server,
    title: "AWS Technical Essentials",
    issuer: "AWS",
    date: "Nov 2025",
    description: "Acquired foundational knowledge of AWS cloud services, including compute, storage, databases, and security fundamentals.",
    credentialUrl: "https://skillbuilder.aws/learn/K8C2FNZM6X/aws-technical-essentials/N7Q3SXQCDY"
  },
  {
    icon: Database,
    title: "Microsoft on AWS - Migrate SQL",
    issuer: "AWS",
    date: "Dec 2025",
    description: "Learned best practices for migrating Microsoft SQL Server databases to Amazon Aurora using AWS Database Migration Service.",
    credentialUrl: "https://skillbuilder.aws/learn/3GSWPE6M11/microsoft-on-aws--migrate-sql-server-databases-to-aurora/8BAXU4T42Q"
  },
  
  // Google Cloud Certificates
  {
    icon: Brain,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Nov 2024",
    description: "Learned the fundamentals of generative AI, its applications, and how it's transforming various industries through hands-on exercises.",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/4d8c6435-b241-41d6-9d5a-92b0bb88bc99/badges/12747764"
  },
  {
    icon: ShieldCheck,
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "Nov 2024",
    description: "Explored the principles of responsible AI, including fairness, interpretability, privacy, and security in AI systems.",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/4d8c6435-b241-41d6-9d5a-92b0bb88bc99/badges/12746797"
  },
  
  
  // Hackathon Winning Certificate
  {
    icon: Award,
    title: "National Hackathon Winners – QubitX 2025",
    issuer: "GL Bajaj Group of Institutions",
    date: "May 2025",
    description: "Awarded for outstanding performance and innovation in the national-level QubitX 2025 hackathon competition.",
    credentialUrl: "https://www.linkedin.com/in/prakrati-mishra-19122b291/details/certifications/1747860065438/single-media-viewer/"
  },
  
  // Research Paper
  {
    icon: BookOpen,
    title: "Research Paper Publication PARETO TIME'25",
    issuer: "Delhi University",
    date: "Apr 2025",
    description: "Published research paper in the prestigious PARETO TIME'25 conference organized by Delhi University.",
    credentialUrl: "https://www.linkedin.com/in/prakrati-mishra-19122b291/details/certifications/1746019637443/single-media-viewer/"
  },
  
  // IMUN
  {
    icon: Users,
    title: "International Model United Nations Conference",
    issuer: "International MUN",
    date: "Mar 2025",
    description: "Participated in the International Model United Nations conference, developing skills in diplomacy, negotiation, and international relations.",
    credentialUrl: "https://www.linkedin.com/in/prakrati-mishra-19122b291/details/certifications/1743009101485/single-media-viewer/"
  },
  
  // CodeChef
  {
    icon: Code2,
    title: "Codechef Coding Certification",
    issuer: "CodeChef",
    date: "Aug 2025",
    description: "Achieved certification for demonstrating strong problem-solving and coding skills through competitive programming challenges.",
    credentialUrl: "https://www.codechef.com/users/prakratimishra/certificates"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2a2bf7] to-[#8b49ff] mx-auto" />
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col 
                         border border-border/50 hover:border-primary/30 hover:scale-[1.02] 
                         hover:bg-gradient-to-br hover:from-background/50 hover:to-muted/5"
            >
              <CardHeader className="pb-2 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <cert.icon className="h-6 w-6 group-hover:text-primary/90" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary/90 transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="font-medium group-hover:text-foreground/90 transition-colors duration-300">
                    {cert.issuer}
                  </span>
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-muted rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Credential
                  </a>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-4">
                  {cert.description}
                </p>
                <div className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  Issued: {cert.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}