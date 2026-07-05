import { Bath, CookingPot, Toilet, Flame, Paintbrush, Sparkles, Accessibility, Home } from "lucide-react"

const services = [
  { icon: Bath, title: "ユニットバス交換", desc: "冬でも暖かい高断熱浴室へ。掃除がラクな最新モデルもご提案。" },
  { icon: CookingPot, title: "キッチン交換", desc: "家事動線を見直し、収納力と使いやすさを両立したキッチンに。" },
  { icon: Toilet, title: "トイレ交換", desc: "節水・自動洗浄で快適＆清潔。最短1日でのスピード施工も可能。" },
  { icon: Flame, title: "給湯器・コンロ交換", desc: "故障前の交換で安心。省エネ機種で光熱費もおトクに。" },
  { icon: Paintbrush, title: "クロス貼替", desc: "お部屋の印象を一新。抗菌・消臭・調湿など機能性壁紙も豊富。" },
  { icon: Sparkles, title: "ハウスクリーニング", desc: "水回りから換気扇まで、プロの技術でまるごとリフレッシュ。" },
  { icon: Accessibility, title: "バリアフリー改修", desc: "手すり設置・段差解消で、長く安心して暮らせる住まいへ。" },
  { icon: Home, title: "フルリノベーション", desc: "間取り変更から内装まで一新。暮らしに合わせた大規模リフォーム。" },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">SERVICES</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            Re:Home Design の<span className="text-primary">リフォームサービス</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            水回りから内装工事、フルリノベーションまで。大田区を中心に幅広く対応します。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-rounded text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
