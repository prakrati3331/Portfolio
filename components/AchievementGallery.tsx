'use client'

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export type GalleryType = 'qubitx' | 'pareto' | 'event_participation_gallery' | 'ppoc_policy';

const imagePaths = {
  qubitx: [
    "/qubitx-1.jpg",
    "/qubitx-2.jpg",
    "/qubitx-3.jpg",
    "/qubitx-4.jpg",
    "/qubitx-5.jpg",
  ],

  ppoc_policy: [
  "/ppoc-01.jpeg",
  "/ppoc-1.jpeg", 
  "/ppoc-2.jpeg",
  "/ppoc-3.jpeg", 
  "/ppoc-4.jpeg",
  "/ppoc-5.jpg", 
  "/ppoc-6.jpeg",
  "/ppoc-7.jpeg", 
  "/ppoc-8.jpeg",
  "/ppoc-9.jpeg",
  "/ppoc-10.jpeg",
  "/ppoc-11.jpeg",
],

  pareto: [
    "/pareto-1.jpg",
    "/pareto-2.jpg",
    "/pareto-3.jpg",
    "/pareto-4.jpg"
  ],
  event_participation_gallery: [
    "/a.jpg",
    "/b.jpg",
    "/c.jpg",
    "/d.jpg",
    "/e.jpg"
  ]
};

export function AchievementGallery({ galleryId }: { galleryId: GalleryType }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const images = imagePaths[galleryId]
  const itemWidth = 280
  const gap = 16
  const itemHeight = 210

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollLeft = index * (itemWidth + gap);
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    scrollToIndex(newIndex);
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(newIndex);
  }

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / (itemWidth + gap));
    setCurrentIndex(index);
  }

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 px-4 relative">
      <div className="relative group">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transform -translate-x-2 transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          ref={containerRef}
          className="flex overflow-x-auto w-full snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <div 
            className="flex items-stretch" 
            style={{ 
              gap: `${gap}px`,
              padding: '0 16px',
              minHeight: `${itemHeight + 40}px`
            }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 snap-start"
                style={{ 
                  width: `${itemWidth}px`,
                  scrollSnapAlign: 'start'
                }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative" style={{ width: '100%', height: `${itemHeight}px` }}>
                    <div className="w-full h-full transform transition-transform duration-300 hover:scale-110">
                      <Image
                        src={image}
                        alt={`Achievement ${index + 1}`}
                        fill
                        className="object-contain p-1"
                        style={{ transform: galleryId === 'event_participation_gallery' ? 'scale(1.4)' : 'scale(1.2)' }}
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transform translate-x-2 transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}












// 'use client'

// import * as React from "react"
// import Image from "next/image"
// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export type GalleryType = 'qubitx' | 'pareto' | 'event_participation_gallery';

// const imagePaths = {
//   qubitx: [
//     "/qubitx-1.jpg",
//     "/qubitx-2.jpg",
//     "/qubitx-3.jpg",
//     "/qubitx-4.jpg",
//     "/qubitx-5.jpg",
//   ],
//   pareto: [
//     "/pareto-1.jpg",
//     "/pareto-2.jpg",
//     "/pareto-3.jpg"
//   ],
//   event_participation_gallery: [
//     "/a.jpg",
//     "/b.jpg",
//     "/c.jpg",
//     "/d.jpg",
//     "/e.jpg"
//   ]
// };

// export function AchievementGallery({ galleryId }: { galleryId: GalleryType }) {
//   const [currentIndex, setCurrentIndex] = React.useState(0)
//   const containerRef = React.useRef<HTMLDivElement>(null)
//   const images = imagePaths[galleryId]
//   const itemWidth = 280
//   const gap = 16
//   const itemHeight = 210 // 4:3 aspect ratio for the container

//   const scrollToIndex = (index: number) => {
//     if (!containerRef.current) return;
    
//     const container = containerRef.current;
//     const scrollLeft = index * (itemWidth + gap);
    
//     container.scrollTo({
//       left: scrollLeft,
//       behavior: 'smooth'
//     });
//   }

//   const nextSlide = () => {
//     const newIndex = (currentIndex + 1) % images.length;
//     scrollToIndex(newIndex);
//   }

//   const prevSlide = () => {
//     const newIndex = (currentIndex - 1 + images.length) % images.length;
//     scrollToIndex(newIndex);
//   }

//   const handleScroll = () => {
//     if (!containerRef.current) return;
//     const container = containerRef.current;
//     const scrollPosition = container.scrollLeft;
//     const index = Math.round(scrollPosition / (itemWidth + gap));
//     setCurrentIndex(index);
//   }

//   React.useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll, { passive: true });
//       return () => container.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-4 px-4 relative">
//       <div className="relative group">
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transform -translate-x-2 transition-all hover:scale-110"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         {/* Carousel Container */}
//         <div 
//           ref={containerRef}
//           className="flex overflow-x-auto w-full snap-x snap-mandatory scrollbar-hide"
//           style={{ 
//             scrollSnapType: 'x mandatory',
//             WebkitOverflowScrolling: 'touch',
//             scrollBehavior: 'smooth',
//             msOverflowStyle: 'none',  // Hide scrollbar in IE/Edge
//             scrollbarWidth: 'none',   // Hide scrollbar in Firefox
//           }}
//         >
//           <div 
//             className="flex items-stretch" 
//             style={{ 
//               gap: `${gap}px`,
//               padding: '0 16px',
//               minHeight: `${itemHeight + 40}px` // Ensure consistent height
//             }}
//           >
//             {images.map((image, index) => (
//               <div 
//                 key={index} 
//                 className="flex-shrink-0 snap-start"
//                 style={{ 
//                   width: `${itemWidth}px`,
//                   scrollSnapAlign: 'start'
//                 }}
//               >
//                 <Card className="overflow-hidden h-full flex flex-col">
//                   <div className="relative" style={{ width: '100%', height: `${itemHeight}px` }}>
//                     <div className="w-full h-full transform transition-transform duration-300 hover:scale-110">
//                       <Image
//                         src={image}
//                         alt={`Achievement ${index + 1}`}
//                         fill
//                         className="object-contain p-1"
//                         style={{ transform: galleryId === 'event_participation_gallery' ? 'scale(1.4)' : 'scale(1.2)' }}
//                         priority={index < 2}
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       />
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transform translate-x-2 transition-all hover:scale-110"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToIndex(index)}
//             className={`w-2.5 h-2.5 rounded-full transition-colors ${
//               index === currentIndex ? 'bg-primary' : 'bg-muted'
//             }`}
//             aria-label={`Go to image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }




// 'use client'

// import * as React from "react"
// import Image from "next/image"
// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// type GalleryType = 'qubitx' | 'pareto';

// const imagePaths = {
//   qubitx: [
//     "/qubitx-1.jpg",
//     "/qubitx-2.jpg",
//     "/qubitx-3.jpg",
//     "/qubitx-4.jpg"
//   ],
//   pareto: [
//     "/pareto-1.jpg",
//     "/pareto-2.jpg",
//     "/pareto-3.jpg"
//   ]
// };

// export function AchievementGallery({ galleryId }: { galleryId: GalleryType }) {
//   const [currentIndex, setCurrentIndex] = React.useState(0)
//   const containerRef = React.useRef<HTMLDivElement>(null)
//   const images = imagePaths[galleryId]
//   const itemWidth = 300
//   const gap = 16

//   // Calculate total width needed for all items
//   const totalWidth = (itemWidth + gap) * images.length - gap

//   const scrollToIndex = (index: number) => {
//     if (!containerRef.current) return;
    
//     const scrollLeft = index * (itemWidth + gap);
//     containerRef.current.scrollTo({
//       left: scrollLeft,
//       behavior: 'smooth'
//     });
//     setCurrentIndex(index);
//   }

//   const nextSlide = () => {
//     const newIndex = (currentIndex + 1) % images.length;
//     scrollToIndex(newIndex);
//   }

//   const prevSlide = () => {
//     const newIndex = (currentIndex - 1 + images.length) % images.length;
//     scrollToIndex(newIndex);
//   }

//   // Handle scroll events to update currentIndex
//   const handleScroll = () => {
//     if (!containerRef.current) return;
//     const scrollPosition = containerRef.current.scrollLeft;
//     const index = Math.round(scrollPosition / (itemWidth + gap));
//     setCurrentIndex(index);
//   }

//   // Add scroll event listener
//   React.useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll, { passive: true });
//       return () => container.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-4 px-4">
//       <div className="relative group">
//         {/* Carousel Container */}
//         <div 
//           ref={containerRef}
//           className="flex overflow-x-auto w-full scroll-smooth snap-x snap-mandatory"
//           style={{ 
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             WebkitOverflowScrolling: 'touch',
//             scrollBehavior: 'smooth'
//           }}
//         >
//           <div 
//             className="flex" 
//             style={{ 
//               gap: `${gap}px`,
//               minWidth: '100%',
//               width: `${totalWidth}px`
//             }}
//           >
//             {images.map((image, index) => (
//               <div 
//                 key={index} 
//                 className="flex-shrink-0"
//                 style={{ 
//                   width: `${itemWidth}px`,
//                   scrollSnapAlign: 'start'
//                 }}
//               >
//                 <Card className="overflow-hidden h-full">
//                   <div className="relative" style={{ paddingBottom: '56.25%' }}>
//                     <Image
//                       src={image}
//                       alt={`${galleryId} image ${index + 1}`}
//                       fill
//                       className="object-cover"
//                       priority={index === 0}
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.onerror = null;
//                         target.src = `https://placehold.co/800x450/2a2bf7/ffffff?text=${galleryId}+${index + 1}`;
//                       }}
//                     />
//                   </div>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Navigation Buttons */}
//         <Button 
//           variant="secondary" 
//           size="icon" 
//           className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md transition-opacity duration-200 ${
//             currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
//           }`}
//           onClick={prevSlide}
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </Button>
        
//         <Button 
//           variant="secondary"
//           size="icon" 
//           className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md transition-opacity duration-200 ${
//             currentIndex >= images.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
//           }`}
//           onClick={nextSlide}
//         >
//           <ChevronRight className="h-5 w-5" />
//         </Button>
//       </div>
//     </div>
//   );
// }









// 'use client'

// import * as React from "react"
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// type GalleryType = 'qubitx' | 'pareto';

// const imagePaths = {
//   qubitx: [
//     "/qubitx-1.jpg",
//     "/qubitx-2.jpg",
//     "/qubitx-3.jpg",
//     "/qubitx-4.jpg"
//   ],
//   pareto: [
//     "/pareto-1.jpg",
//     "/pareto-2.jpg",
//     "/pareto-3.jpg"
//   ]
// };

// export function AchievementGallery({ galleryId }: { galleryId: GalleryType }) {
//   const images = imagePaths[galleryId];

//   return (
//     <div className="w-full max-w-2xl mx-auto mt-4">
//       <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
//         <CarouselContent>
//           {images.map((image, index) => (
//             <CarouselItem key={index} className="pl-1">
//               <div className="p-1">
//                 <Card className="overflow-hidden">
//                   <CardContent className="relative aspect-video p-0">
//                     <Image
//                       src={image}
//                       alt={`${galleryId} image ${index + 1}`}
//                       fill
//                       className="object-cover"
//                       priority={index === 0}
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.onerror = null;
//                         target.src = `https://placehold.co/800x450/2a2bf7/ffffff?text=${galleryId}+${index + 1}`;
//                       }}
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="left-2" />
//         <CarouselNext className="right-2" />
//       </Carousel>
//     </div>
//   );
// }