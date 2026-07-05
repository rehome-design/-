import Image from "next/image"
import { Clock, JapaneseYen, MapPin } from "lucide-react"

const cases = [
  {
    img: "/images/eco-bathroom.png",
    area: "大田区",
    client: "K様（40代・ご夫婦）",
    title: "冬でも暖かいユニットバス交換",
    price: "128万円",
    term: "6日間",
    comment: "3社比較の末にお願いしました。自社施工で担当者が最後まで同じ。3Dで完成イメージも見られて安心でした。",
  },
  {
    img: "/images/storage-kitchen.png",
    area: "品川区",
    client: "T様（30代・共働き）",
    title: "収納力アップのシステムキッチン",
    price: "98万円",
    term: "8日間",
    comment: "家事動線がスムーズになり、料理が楽しくなりました。中間マージンがない分、予算内で理想を叶えられました。",
  },
  {
    img: "/images/barrier-free-house.png",
    area: "目黒区",
    client: "Y様（60代・ご夫婦）",
    title: "段差解消のバリアフリー全面改修",
    price: "165万円",
    term: "12日間",
    comment: "手すり設置や段差解消で毎日が安心に。介護保険の申請までサポートしてもらえて助かりました。",
  },
  {
    img: "/images/hero-living-room.png",
    area: "港区",
    client: "S様（50代・単身）",
    title: "明るく開放的な水回りフルリフォーム",
    price: "240万円",
    term: "約3週間",
    comment: "古くて不便だったキッチンと浴室が一新。工事中も丁寧に説明してくれて、信頼できる会社だと実感しました。",
  },
  {
    img: "/images/eco-wood-table.png",
    area: "大田区",
    client: "O様（30代・新婚）",
    title: "自然素材のリビング内装リノベ",
    price: "88万円",
    term: "7日間",
    comment: "エコ素材の提案が丁寧で、空気が変わったよう。LINEでのやり取りもスムーズで気軽に相談できました。",
  },
  {
    img: "/images/3d-simulation-sketch.png",
    area: "品川区",
    client: "H様（50代・ご夫婦）",
    title: "3D提案で仕上げたキッチン改装",
    price: "112万円",
    term: "9日間",
    comment: "完成イメージを事前に3Dで確認できたので迷いなく決められました。見た目も機能性も大満足です。",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">CASE STUDIES</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            大田区・品川区・港区・目黒区の<span className="text-primary">施工事例</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            すべて<span className="font-bold text-foreground">自社施工</span>。実際の費用と工期を公開しています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.img || "/placeholder.svg"}
                  alt={`${c.area}の${c.title}｜Re:Home Designの施工事例`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  <MapPin className="h-3 w-3" />
                  {c.area}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-muted-foreground">{c.client}</p>
                <h3 className="mt-1 font-rounded text-lg font-bold text-foreground">{c.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1 text-sm font-bold text-secondary-foreground">
                    <JapaneseYen className="h-3.5 w-3.5" />
                    {c.price}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {c.term}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">「{c.comment}」</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
