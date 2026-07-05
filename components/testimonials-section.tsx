import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "K様", area: "大田区", age: "40代・ご夫婦", service: "ユニットバス交換", comment: "3Dで完成イメージが事前に見られて安心。浴室が暖かくなり、子どもとゆっくり入浴するのが楽しみになりました。" },
  { name: "T様", area: "品川区", age: "30代・共働き", service: "キッチン交換", comment: "柔軟なスケジューリングに助けられました。提案力も高く、私たちの生活に合ったキッチンを実現できました。" },
  { name: "S様", area: "港区", age: "50代・単身", service: "水回りフルリフォーム", comment: "古くて不便だったキッチンと浴室が一新。工事中も丁寧に説明してくれて、信頼できる会社だと実感しました。" },
  { name: "Y様", area: "目黒区", age: "60代・ご夫婦", service: "トイレ＋段差解消", comment: "高齢の母のためにバリアフリーに。細かい配慮をしてくれて安心感がありました。今後もお願いしたいです。" },
  { name: "O様", area: "大田区", age: "30代・新婚", service: "クロス貼替＋照明", comment: "LINEでのやり取りがスムーズで、若いスタッフさんも丁寧で親切。これからも住まいの相談をお願いしたいです。" },
  { name: "M様", area: "港区", age: "40代・女性", service: "トイレ＋収納造作", comment: "仕事で留守がちでも安心してお任せできました。工事の進行報告も分かりやすく、リフォームが楽しみになりました。" },
]

export function TestimonialsSection() {
  return (
    <section id="voice" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">VOICE</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            お客様の<span className="text-primary">喜びの声</span>と評判
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </span>
            <span className="font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">（大田区・品川区・港区・目黒区のお客様）</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name + t.service} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="h-7 w-7 text-primary/30" />
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground">「{t.comment}」</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-bold text-foreground">
                    {t.area} {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.age}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
