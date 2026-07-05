const stats = [
  { value: "0円", label: "中間マージン" },
  { value: "17年", label: "地域での実績" },
  { value: "10,000件+", label: "累計施工実績" },
  { value: "4.9", label: "お客様口コミ評価" },
  { value: "最長10年", label: "アフター保証" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-5 md:py-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <span className="font-rounded text-2xl font-extrabold md:text-3xl">{s.value}</span>
            <span className="mt-1 text-xs text-primary-foreground/80 md:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
