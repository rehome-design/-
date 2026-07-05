"use client"

import { useEffect, useState } from "react"
import { MessageCircle, CalendarCheck, Phone } from "lucide-react"
import { company } from "@/lib/site"

export function FloatingCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-300 md:bottom-6 md:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* LINE 予約 */}
      <a
        href={company.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-105"
        aria-label="LINEで相談・予約する"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">LINEで予約</span>
      </a>

      {/* Web 予約 */}
      <a
        href="#contact"
        className="group flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-lg shadow-black/10 transition-transform hover:scale-105"
        aria-label="Webフォームで予約する"
      >
        <CalendarCheck className="h-5 w-5" />
        <span className="hidden sm:inline">Web予約</span>
      </a>

      {/* 電話 */}
      <a
        href={`tel:${company.tel.replace(/-/g, "")}`}
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-black/10 transition-transform hover:scale-105"
        aria-label="電話で相談する"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">電話相談</span>
      </a>
    </div>
  )
}
