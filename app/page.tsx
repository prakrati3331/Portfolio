"use client"

import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Publications } from "@/components/Publications"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/Certifications"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { GlobeClient } from "@/components/GlobeClient"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <GlobeClient />
      </div>
      <div className="relative z-10">
        <Suspense fallback={null}>
          <Hero />
          <About />
          <Achievements />
        
          <Publications />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </Suspense>
      </div>
    </main>
  )
}











// import { Suspense } from "react"
// import { Hero } from "@/components/hero"
// import { About } from "@/components/about"
// import { Achievements } from "@/components/achievements"
// import { Skills } from "@/components/skills"
// import { Projects } from "@/components/projects"
// import { Certifications } from "@/components/Certifications"
// import { Experience } from "@/components/experience"
// import { Contact } from "@/components/contact"
// import { GlobeClient } from "@/components/GlobeClient"

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-background overflow-x-hidden">
//       <div className="fixed inset-0 z-0">
//         <GlobeClient />
//       </div>

//       <div className="relative z-10">
//         <Hero />
//         <About />
//         <Achievements />
//         <Skills />
//         <Projects />
//         <Certifications />
//         <Experience />
//         <Contact />
//       </div>
//     </main>
//   )
// }
