import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-rounded",
  weight: ["500", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rehome-design.com"),
  title: {
    default: "大田区のリフォームなら Re:Home Design｜自社施工・中間マージン0円【口コミ4.9】",
    template: "%s｜Re:Home Design（大田区のリフォーム）",
  },
  description:
    "大田区のリフォーム会社 Re:Home Design（株式会社HOTTA）。自社施工で中間マージン0円だから高品質＆適正価格。創業17年・累計10,000件超の実績。3Dシミュレーションで完成イメージを事前確認。品川区・港区・目黒区・川崎市も対応。無料相談・LINE予約・Web予約受付中。",
  keywords: [
    "大田区 リフォーム",
    "大田区 リフォーム おすすめ",
    "大田区 リフォーム 口コミ",
    "大田区 リフォーム 評判",
    "大田区 内装工事 会社",
    "大田区 ユニットバス交換",
    "大田区 エコリフォーム",
    "大田区 施工実績 豊富な会社",
    "大田区 安い リフォーム会社",
    "大田区 自社施工 リフォーム",
    "品川区 リフォーム 評判",
    "港区 リフォーム 口コミ",
    "目黒区 リフォーム 比較",
    "リフォーム 東京 女性プランナー",
    "3Dシミュレーション リフォーム",
  ],
  authors: [{ name: "Re:Home Design（株式会社HOTTA）" }],
  alternates: {
    canonical: "https://rehome-design.com",
  },
  openGraph: {
    type: "website",
    title: "大田区のリフォームなら Re:Home Design｜自社施工・中間マージン0円",
    description:
      "大田区密着・自社施工で中間マージン0円。創業17年・累計10,000件超。3D提案×エコ素材で理想の住まいを適正価格で実現します。",
    url: "https://rehome-design.com",
    siteName: "Re:Home Design",
    images: [
      {
        url: "/images/hero-living-room.png",
        width: 1200,
        height: 630,
        alt: "大田区のリフォーム会社 Re:Home Design の施工イメージ",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "大田区のリフォームなら Re:Home Design｜自社施工・中間マージン0円",
    description: "大田区密着・自社施工で中間マージン0円。創業17年・累計10,000件超の実績。",
    images: ["/images/hero-living-room.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#2c9d63",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${notoSansJP.variable} ${mPlusRounded.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "@id": "https://rehome-design.com",
              name: "Re:Home Design（株式会社HOTTA）",
              image: "https://rehome-design.com/images/hero-living-room.png",
              description:
                "大田区のリフォーム会社。自社施工で中間マージン0円。創業17年・累計10,000件超の実績。品川区・港区・目黒区・川崎市も対応。",
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
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
