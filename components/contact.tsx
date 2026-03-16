"use client"

import { Github, Linkedin, Mail, Code2, Code, Mail as MailIcon, FileCode } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prakrati-mishra-19122b291/",
    username: "Prakrati Mishra"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/prakrati3331",
    username: "prakrati3331"
  },
  {
    icon: MailIcon,
    label: "Email",
    href: "mailto:prakratimishra2006@gmail.com",
    username: "prakratimishra2006@gmail.com"
  },
  {
    icon: Code2,
    label: "CodeChef",
    href: "https://www.codechef.com/users/prakratimishra",
    username: "prakratimishra"
  },
  {
    icon: Code,
    label: "LeetCode",
    href: "https://leetcode.com/u/prakratimishra3331/",
    username: "prakratimishra3331"
  },
  {
    icon: FileCode,
    label: "Codolio",
    href: "https://codolio.com/profile/prakrati_mishra",
    username: "prakrati_mishra"
  }
]

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Open to collaborations, AI projects, and innovative opportunities in full-stack development and LLM systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 flex items-center gap-4 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-sm text-muted-foreground">{link.label}</h3>
                <p className="text-foreground text-sm font-medium mt-0.5">{link.username}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Prakrati Mishra. Building AI-powered applications and intelligent systems.</p>
        </div>
      </div>
    </section>
  )
}
