"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  service: string
  quote: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplaySpeed?: number
}

export function TestimonialCarousel({ testimonials, autoplaySpeed = 5000 }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Handle autoplay
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [testimonials.length, autoplaySpeed, isPaused])

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="w-full flex-shrink-0 border-none shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2 flex-shrink-0" />
                  <p className="text-lg italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-primary w-4" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
