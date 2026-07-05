import { Handshake, Cuboid, Leaf, HeartHandshake, Users, ShieldCheck } from "lucide-react"

const strengths = [
  {
    icon: Handshake,
    title: "完全自社施工・中間マージン0円",
    desc: "下請けに丸投げせず、自社の職人が最初から最後まで責任を持って施工。余計な中間マージンが発生しないから、同じ品質でも大田区で選ばれる適正価格を実現します。",
    highlight: true,
  },
  {
    icon: Cuboid,
    title: "3D/ARシミュレーション",
    desc: "完成後のイメージを工事前にその場で確認。「思っていたのと違った」を防ぎ、納得してから工事に進めます。",
  },
  {
    icon: Leaf,
    title: "エコ素材・省エネ設備",
    desc: "自然素材や高断熱・省エネ設備をご提案。光熱費を抑えながら、健康にもやさしい快適な住まいへ。",
  },
  {
    icon: ShieldCheck,
    title: "最長10年のアフター保証",
    desc: "施工して終わりではありません。定期点検とAI予測メンテナンスで、長く安心して暮らせる仕組みを整えています。",
  },
  {
    icon: Users,
    title: "女性プランナー在籍",
    desc: "収納・家事動線・デザインまで、女性ならではのきめ細かな視点でご提案。はじめての方も相談しやすいチームです。",
  },
  {
    icon: HeartHandshake,
    title: "補助金・介護保険サポート",
    desc: "省エネ補助金やバリアフリー改修の介護保険など、複雑な申請手続きも専任スタッフがサポートします。",
  },
]

export function StrengthsSection() {
  return (
    <section id="strengths" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">WHY Re:Home Design</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            大田区で選ばれる<span className="text-primary">6つの理由</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            「他社と何が違うの？」——一番の違いは、<span className="font-bold text-foreground">自社施工で中間マージンがかからない</span>こと。
            だから高品質でも価格に納得いただけます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                s.highlight
                  ? "border-accent/40 bg-accent/10 md:col-span-2 lg:col-span-1"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${
                  s.highlight ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-rounded text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
