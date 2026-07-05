import { Baby, Users, Accessibility } from "lucide-react"

const targets = [
  {
    icon: Users,
    tag: "30代・共働き世帯",
    title: "時短施工＋スマートホーム対応",
    points: ["土日・夜間対応で生活への影響を最小限に", "スマート家電に対応した最新キッチン", "LINEで完結するスムーズな打ち合わせ"],
  },
  {
    icon: Baby,
    tag: "40代・子育て世帯",
    title: "収納拡充＋抗菌素材プラン",
    points: ["増える荷物に対応する大容量収納", "小さなお子様にやさしい抗菌・防汚素材", "家事動線を短くして毎日をラクに"],
  },
  {
    icon: Accessibility,
    tag: "50代以上のご夫婦",
    title: "バリアフリー＋資産価値向上",
    points: ["段差解消・手すりで将来も安心", "断熱改修でヒートショック対策", "介護保険・補助金の申請までサポート"],
  },
]

export function TargetSolutions() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">SOLUTIONS</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            あなたにピッタリの<span className="text-primary">プラン</span>をご提案
          </h2>
          <p className="mt-4 text-muted-foreground">ライフスタイルに合わせて、最適なリフォームプランをオーダーメイドします。</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {targets.map((t) => (
            <div key={t.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <t.icon className="h-6 w-6" />
              </div>
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-foreground">
                {t.tag}
              </span>
              <h3 className="mt-3 font-rounded text-lg font-bold text-foreground">{t.title}</h3>
              <ul className="mt-4 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
