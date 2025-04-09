"use client"

import React from "react"

import { useEffect, useState, useRef } from "react"

interface VerticalSwipeProps {
  children: React.ReactNode
}

export function VerticalSwipe({ children }: VerticalSwipeProps) {
  const [activeSection, setActiveSection] = useState(0)
  const childrenArray = React.Children.toArray(children)
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

  // Setup refs for each section
  useEffect(() => {
    sectionRefs.current = Array(childrenArray.length).fill(null)
  }, [childrenArray.length])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      let newActiveSection = 0
      sectionRefs.current.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          newActiveSection = index
        }
      })

      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index]
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="vertical-swipe-container">
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-3">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Scroll to section ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="vertical-swipe-sections">
        {React.Children.map(children, (child, index) => (
          <div
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen w-full"
            data-section-index={index}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
