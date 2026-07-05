import { company, navItems } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-rounded text-lg font-extrabold">
              R
            </span>
            <span className="font-rounded text-lg font-extrabold text-foreground">Re:Home Design</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            大田区のリフォーム専門店。自社施工で中間マージン0円。高品質なリフォームを適正価格でお届けします。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション">
          <p className="mb-3 font-rounded font-bold text-foreground">メニュー</p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-rounded font-bold text-foreground">会社情報</p>
          <address className="space-y-1 text-sm not-italic text-muted-foreground">
            <p>{company.legal}（{company.brand}）</p>
            <p>{company.address}</p>
            <p>
              TEL:{" "}
              <a href={`tel:${company.tel.replace(/-/g, "")}`} className="hover:text-primary">
                {company.tel}
              </a>
            </p>
            <p>Email: {company.email}</p>
            <p>営業時間: {company.hours}</p>
            <p>対応エリア: {company.areas.join("・")}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {company.brand} / {company.legal}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
