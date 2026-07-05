"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, CalendarCheck } from "lucide-react"
import { company, navItems } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#home" className="flex items-center gap-2" aria-label="Re:Home Design ホームへ">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-rounded text-lg font-extrabold">
            R
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-rounded text-lg font-extrabold tracking-tight text-foreground">
              Re:Home Design
            </span>
            <span className="text-[10px] text-muted-foreground">大田区のリフォーム｜株式会社HOTTA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${company.tel.replace(/-/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-bold text-primary"
          >
            <Phone className="h-4 w-4" />
            {company.tel}
          </a>
          <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              <CalendarCheck className="mr-1.5 h-4 w-4" />
              無料相談・予約
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground xl:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container grid gap-1 py-4" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <CalendarCheck className="mr-1.5 h-4 w-4" />
                  無料相談・Web予約
                </a>
              </Button>
              <a
                href={`tel:${company.tel.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-1.5 rounded-full border border-primary py-2.5 text-sm font-bold text-primary"
              >
                <Phone className="h-4 w-4" />
                {company.tel}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
