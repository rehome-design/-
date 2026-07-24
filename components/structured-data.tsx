"use client"

import { useEffect } from "react"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://rehome-design.com",
  name: "Re:Home Design（株式会社HOTTA）",
  image: "https://rehome-design.com/images/hero-living-room.png",
  description:
    "大田区のリフォーム会社。設計から施工まで自社の職人が一貫して担当。創業17年・累計10,000件超の実績。品川区・港区・目黒区・川崎市も対応。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "東糀谷3-5-6 1階",
    addressLocality: "大田区",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
  url: "https://rehome-design.com",
  telephone: "03-6339-1816",
  email: "info@hotta-haru.com",
  priceRange: "¥¥",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: ["大田区", "品川区", "港区", "目黒区", "川崎市"],
  knowsAbout: [
    "住宅リフォーム",
    "キッチンリフォーム",
    "ユニットバス交換",
    "トイレ交換",
    "内装工事",
    "エコリフォーム",
    "バリアフリーリフォーム",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1280",
    bestRating: "5",
  },
}

export function StructuredData() {
  useEffect(() => {
    const id = "rehome-structured-data"
    if (document.getElementById(id)) return
    const script = document.createElement("script")
    script.id = id
    script.type = "application/ld+json"
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [])

  return null
}
