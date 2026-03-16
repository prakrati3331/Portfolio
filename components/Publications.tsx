"use client"

import { FileText, BookOpen, FileText as Article } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const publications = [
  
  {
  title: "Bi-LSTM/CNN Hierarchical Explainable Federated IDS for Secure Critical IoT",
  type: "Patent",
  publisher: "Application Number: 202521132152",
  date: "2025", // Update with the actual year if different
  description: "A novel approach to Intrusion Detection Systems (IDS) for IoT using Bi-LSTM/CNN with hierarchical federated learning, enhancing security for critical IoT applications while maintaining explainability.",
  links: [
    { label: "Patent Application status", url: "https://iprsearch.ipindia.gov.in/PatentSearch/PatentSearch/ViewApplicationStatus" }, // Replace # with the patent URL if available
    { label: "View Abstract", url: "https://drive.google.com/file/d/1XAx23nEeTOyHa_fZcyVo86ehoMQK48Bp/view?usp=sharing" },
  ],
  icon: FileText
},
  
  {
    title: "Mitigating Educational Uncertainty With Machine Intelligence in Student Advising",
    type: "Research Paper",
    publisher: "International Journal of Scientific Research in Technology & Management E-ISSN: 2583-7141",
    date: "January 2026",
    description: "A comprehensive study on using machine learning and LLMs to reduce uncertainty in educational decision-making processes for students.",
    links: [
      { label: "View Abstract", url: "https://ijsrtm.com/Papers/IJSRTM-IJSRTM298171122.pdf" },
      { label: "View Code", url: "https://github.com/prakrati3331/Mitigating-Educational-Uncertainty-With-Machine-Intelligence-in-Student-Advising" }
    ],
    icon: FileText
  },
  {
  title: "Quantum Leaps in Industry: The Economic Alchemy of Artificial Intelligence",
  type: "Research Paper",
  publisher: "Delhi University Research Symposium on AI & Economics",
  date: "April 2025",
  description: "An exploration of how artificial intelligence is transforming industries and creating economic value through innovative applications and automation. The paper delves into case studies across various sectors, analyzing the economic impact and future potential of AI-driven transformation.",
  links: [
    { label: "View Presentation", url: "#" }, // Replace with actual link
    { label: "View Abstract", url: "#" } // Replace with actual link
  ],
  icon: FileText
}
  
  
]

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Patent Publications & Research</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            My contributions to academic research and technical writing in the field of AI and computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pub.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold leading-snug">{pub.title}</CardTitle>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-muted text-xs font-medium">
                    {pub.type}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{pub.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{pub.description}</p>
                <p className="text-sm font-medium mb-3">Published in: <span className="text-foreground">{pub.publisher}</span></p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {pub.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}