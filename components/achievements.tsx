'use client'

import { Trophy, Target, Award, Image as ImageIcon, CalendarDays } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AchievementGallery } from "./AchievementGallery"
import Image from "next/image"

type GalleryType = 'qubitx' | 'pareto' | 'event_participation_gallery';

interface Achievement {
  icon: any;
  title: string;
  badge: string;
  organization: string;
  description: string;
  gradient: string;
  hasGallery: boolean;
  galleryId: GalleryType;
  credentialUrl?: string;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "QubitX 2025 National Hackathon",
    badge: "Winner",
    organization: "GL Bajaj, Mathura",
    description: "Built an AI-driven platform revolutionizing hackathon participation with curated resources, mentorship, and real-time team matching.",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
    hasGallery: true,
    galleryId: "qubitx"
  },

  {
  icon: Trophy,
  title: "PPOC Policy Concave 2026-Policy Hackathon",
  badge: "2nd Runner Up",
  organization: "IIT Kanpur",
  description: "Won 2nd Runner Up in prestigious PPOC Policy Concave 2026 at IIT Kanpur, showcasing expertise in policy analysis and innovative solution development.",
  hasGallery: true,  // Make sure this is true
  galleryId: "ppoc_policy",
},

  {
    icon: Trophy,
    title: "Pareto Time'25",
    badge: "1st Runner Up",
    organization: "KMC Delhi University",
    description: "Presented a paper on \"Quantum Leaps in Industry: The Economic Alchemy of Artificial Intelligence\" at the national level competition.",
    gradient: "from-[#ff6b6b] to-[#4ecdc4]",
    hasGallery: true,
    galleryId: "pareto",
  },
  {
    icon: CalendarDays,
    title: "Event Participation Gallery",
    badge: "Events",
    organization: "Various Locations",
    description: "A collection of memorable moments from various tech events, workshops, and conferences I've participated in.",
    gradient: "from-[#FF6B35] to-[#F7C59F]",
    hasGallery: true,
    galleryId: "event_participation_gallery",
  },
  
]

const hackathonParticipations = [
  {
    title: "HackwithIndia by Google",
    organization: "Google Office Finale",
    year: "2024-2025",
    description: "Competed among 25,000+ teams from across India. Demonstrated AI and full-stack capabilities while building innovative solutions for real-world problems, reaching the Top 5,000 finalist stage.",
  },
  {
    title: "National Space Hackathon",
    organization: "Indian Institute of Technology, Delhi",
    year: "2024-2025",
    description: "Focused on space technology and innovation. Built solutions leveraging AI and data processing to address challenges in satellite technology, remote sensing, and space exploration applications.",
  },
  {
    title: "ByteVerse 7.0",
    organization: "National Institute of Technology, Patna",
    year: "2024-2025",
    description: "A prestigious national-level hackathon emphasizing innovative tech solutions. Showcased full-stack development expertise with AI integration for creating scalable and impactful applications.",
  },
  {
    title: "Build With India",
    organization: "National Level",
    year: "2024-2025",
    description: "Developed solutions focused on Indian innovation and technological advancement. Applied AI, machine learning, and full-stack development to create applications solving India-specific challenges.",
  },
  {
    title: "Tech Knockout",
    organization: "IIIT Bhopal - Logic-driven DSA Challenge",
    year: "2024-2025",
    description: "A competitive DSA-focused challenge testing algorithmic problem-solving skills. Demonstrated strong logic and coding expertise in competitive programming environment.",
  },
  {
    title: "Smart India Hackathon",
    organization: "National Level",
    year: "2024-2025",
    description: "Participated in India's largest hackathon initiative. Built solutions addressing government challenges using cutting-edge technology, AI, and full-stack development methodologies.",
  },
]

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-card/40 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2bf7]/5 via-transparent to-[#8b49ff]/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2a2bf7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b49ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-balance bg-gradient-to-r from-[#00b7ff] via-[#2a2bf7] to-[#8b49ff] bg-clip-text text-transparent">
            Achievements & Hackathons
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00b7ff] via-[#2a2bf7] to-[#8b49ff] mb-4 rounded-full" />
          <p className="text-lg sm:text-xl text-foreground/80 text-pretty font-body">
            Recognized excellence in AI development and full-stack engineering
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-8 text-foreground">Major Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`glass-card group p-6 sm:p-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  <achievement.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#00b7ff] group-hover:text-[#2a2bf7] transition-colors duration-300 relative z-10 group-hover:scale-110 transform group-hover:drop-shadow-[0_0_12px_rgba(42,43,247,0.8)]" />
                </div>
                <div
                  className={`inline-block px-4 py-1.5 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 text-[#c9b5ff] text-sm font-medium rounded-full mb-4 border border-[#2a2bf7]/30`}
                >
                  {achievement.badge}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-1 text-balance text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-3 font-body">{achievement.organization}</p>
                <p className="text-foreground/75 leading-relaxed text-pretty text-sm sm:text-base font-body">
                  {achievement.description}
                </p>
                {achievement.hasGallery && (
                  <div className="mt-4">
                    <AchievementGallery galleryId={achievement.galleryId} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-8 text-foreground">
            Hackathon Participations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathonParticipations.map((hackathon, index) => (
              <div
                key={index}
                className={`glass-card p-5 sm:p-6 group hover:border-[#2a2bf7]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + achievements.length) * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-[#00b7ff] to-[#2a2bf7] group-hover:shadow-[0_0_20px_rgba(42,43,247,0.6)] transition-all">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base mb-1">
                      {hackathon.title}
                    </h4>
                    <p className="text-foreground/70 text-xs sm:text-sm font-body mb-2">{hackathon.organization}</p>
                    <p className="text-foreground/65 text-xs sm:text-sm font-body mb-2 leading-relaxed">
                      {hackathon.description}
                    </p>
                    <p className="text-foreground/50 text-xs font-body">{hackathon.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}