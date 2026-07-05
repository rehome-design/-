import { Check, Info } from "lucide-react"

const rows = [
  { name: "ユニットバス交換", price: "80万〜150万円", term: "5〜7日", popular: true },
  { name: "システムキッチン交換", price: "60万〜120万円", term: "4〜10日", popular: true },
  { name: "トイレ交換", price: "15万〜40万円", term: "半日〜1日" },
  { name: "給湯器・コンロ交換", price: "12万〜30万円", term: "半日〜1日" },
  { name: "クロス貼替（6畳間）", price: "4万〜9万円", term: "1〜2日" },
  { name: "フローリング張替（6畳間）", price: "8万〜18万円", term: "1〜2日" },
  { name: "洗面化粧台交換", price: "12万〜30万円", term: "半日〜1日" },
  { name: "外壁塗装（戸建て）", price: "80万〜150万円", term: "10〜14日" },
  { name: "屋根塗装・葺き替え", price: "40万〜200万円", term: "5〜14日" },
  { name: "間取り変更リノベーション", price: "300万円〜", term: "3〜6週間" },
]

const included = ["商品・材料費", "自社職人の施工費", "既存設備の撤去・処分費", "養生・現場管理費", "工事保証・アフター点検"]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">PRICE &amp; TERM</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            料金も工期も<span className="text-primary">明朗</span>。だから安心。
          </h2>
          <p className="mt-4 text-muted-foreground">
            自社施工で中間マージンがかからないから、下の価格には
            <span className="font-bold text-foreground">材料費・施工費・撤去処分費・保証</span>まで込み。
            追加請求のない明朗会計です。
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[1.6fr_1fr_0.9fr] bg-primary px-4 py-3 text-sm font-bold text-primary-foreground md:px-6 md:text-base">
            <span>工事内容</span>
            <span className="text-right">費用（税込・目安）</span>
            <span className="text-right">工期（目安）</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.name}
              className={`grid grid-cols-[1.6fr_1fr_0.9fr] items-center px-4 py-4 text-sm md:px-6 md:text-base ${
                i % 2 === 1 ? "bg-muted/40" : "bg-card"
              }`}
            >
              <span className="flex flex-wrap items-center gap-2 font-medium text-foreground">
                {r.name}
                {r.popular && (
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                    人気
                  </span>
                )}
              </span>
              <span className="text-right font-bold text-primary">{r.price}</span>
              <span className="text-right text-muted-foreground">{r.term}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 rounded-2xl bg-secondary/60 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 font-rounded font-bold text-secondary-foreground">この価格に含まれるもの</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-4 flex max-w-4xl items-start gap-1.5 text-xs text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          上記は当社の施工実績に基づく標準的な目安です。建物の状態・グレード・数量により変動します。正式なお見積りは無料の現地調査後にご提示し、ご納得いただくまで工事は行いません。
        </p>
      </div>
    </section>
  )
}
