// 会社情報（確定・以後変更しないこと）
export const company = {
  brand: "Re:Home Design",
  legal: "株式会社HOTTA",
  representative: "堀田 はるき",
  address: "〒144-0033 東京都大田区東糀谷3-5-6 1階",
  tel: "03-6339-1816",
  email: "info@hotta-haru.com",
  hours: "9:00〜18:00（年中無休・事前予約制）",
  founded: 2009,
  projects: "10,000",
  areas: ["大田区", "品川区", "港区", "目黒区", "川崎市"],
  lineUrl: "https://line.me/R/",
} as const

export const navItems = [
  { label: "ホーム", href: "#home" },
  { label: "強み", href: "#strengths" },
  { label: "サービス", href: "#services" },
  { label: "料金", href: "#pricing" },
  { label: "施工事例", href: "#cases" },
  { label: "お客様の声", href: "#voice" },
  { label: "Q&A", href: "#faq" },
  { label: "採用情報", href: "#recruit" },
  { label: "会社案内", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
] as const
