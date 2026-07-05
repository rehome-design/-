import { Button } from "@/components/ui/button"
import { Clock, Sparkles, HeartHandshake, ArrowRight } from "lucide-react"

const jobs = [
  "リフォームプランナー",
  "インテリアデザイナー",
  "デジタル営業",
  "施工管理技士",
  "現場施工職",
  "Webデザイナー",
  "営業事務",
  "経理",
  "幹部候補",
]

const perks = [
  { icon: Clock, title: "フレックスタイム制", desc: "生活に合わせた柔軟な働き方ができます。" },
  { icon: Sparkles, title: "副業解禁制度", desc: "スキルや個性を活かせる副業もOK。" },
  { icon: HeartHandshake, title: "未経験・女性も活躍", desc: "多様なメンバーが在籍。丁寧な研修で安心。" },
]

export function RecruitSection() {
  return (
    <section id="recruit" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-primary-foreground/80">RECRUIT</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            住まいづくりを、一緒に楽しみませんか？
          </h2>
          <p className="mt-4 text-primary-foreground/85">
            「すべては世のため人のために」——感謝され、笑顔をつくる仕事を一緒に。大田区から、あたたかいチームを広げています。
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl">
          <p className="mb-3 text-center font-rounded font-bold">現在募集中の職種</p>
          <div className="flex flex-wrap justify-center gap-2">
            {jobs.map((j) => (
              <span
                key={j}
                className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium"
              >
                {j}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl bg-primary-foreground/10 p-6">
              <p.icon className="mb-3 h-7 w-7" />
              <h3 className="font-rounded font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              採用について問い合わせる <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
