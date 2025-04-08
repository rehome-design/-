import type React from "react"
import "./globals.css"
import { Inter, Noto_Sans_JP, Dancing_Script } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "700"],
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "大田区・品川区・港区・目黒区のリフォーム｜Re:Home Design【口コミ高評価】",
  description:
    "創業17年・実績10,000件超！口コミ多数のRe:Home Designが、あなたの理想のリフォームを叶えます。大田区・品川区・港区・目黒区対応。",
  keywords:
    "大田区 リフォーム, 品川区 リフォーム, 港区 内装, 目黒区 リノベーション, リフォーム 口コミ, 水回り 工事, バリアフリー, 女性スタッフ, 3Dシミュレーション",
  openGraph: {
    type: "website",
    title: "大田区・品川区・港区・目黒区のリフォーム｜Re:Home Design",
    description: "地域密着のリフォーム会社。3D提案×エコ素材×自社施工で信頼の実績。",
    url: "https://rehomedesign.co.jp",
    siteName: "Re:Home Design",
    images: [
      {
        url: "https://rehomedesign.co.jp/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Re:Home Design - 大田区・品川区・港区・目黒区のリフォーム会社",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "大田区・品川区・港区・目黒区のリフォーム｜Re:Home Design【口コミ高評価】",
    description: "創業17年・実績10,000件超！口コミ多数のRe:Home Designが、あなたの理想のリフォームを叶えます。",
    images: ["https://rehomedesign.co.jp/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${notoSansJP.variable} ${dancingScript.variable}`}>
      <head>
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Re:Home Design",
              "image": "https://rehome-design.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "東糀谷3-5-8-1階",
                "addressLocality": "大田区",
                "addressRegion": "東京都",
                "postalCode": "144-0033",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.5614,
                "longitude": 139.7473
              },
              "url": "https://rehome-design.com",
              "telephone": "0120-XXX-XXX",
              "priceRange": "¥¥",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/rehomedesign",
                "https://www.instagram.com/rehomedesign"
              ],
              "areaServed": ["大田区", "品川区", "港区", "目黒区", "幸区"],
              "serviceType": ["住宅リフォーム", "キッチンリフォーム", "バスリフォーム", "トイレ交換", "内装工事", "エコリフォーム", "バリアフリーリフォーム"],
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "K様（大田区在住）"
                  },
                  "reviewBody": "3社比較の末にRe:Homeさんへ。3Dで完成イメージが事前に見られて安心でした。"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "T様（品川区在住）"
                  },
                  "reviewBody": "仕事が忙しく時間が取れない中、柔軟なスケジューリングに助けられました。提案力も高く、私たちの生活に合ったキッチンを実現できました。"
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={notoSansJP.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'