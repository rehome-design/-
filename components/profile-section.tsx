import { company } from "@/lib/site"

export function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">MESSAGE</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            代表者<span className="text-primary">プロフィール</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10">
          <p className="font-rounded text-xl font-extrabold text-primary md:text-2xl">
            「住まいが変わると、人生も変わる。」
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              子どもの頃から、街が変わっていく様子を見ながら、「いつか自分の手で、人が笑顔になれる空間をつくりたい」と思うようになりました。
              10代で建設業界に飛び込み、現場やメンテナンス業務を通して“暮らしを支える仕事”の喜びを学びました。
            </p>
            <p>
              20代は営業職や管理職を経験。24歳ではインテリア雑貨の販売事業での起業、初めての起業。しかし、勢いだけでは難しく、思い通りにはいきませんでした。
              そこから内装施工職人として再び現場へ。4年半、技術と向き合い、29歳でゼロから再スタート。
            </p>
            <p>
              仲間を増やしながら少しずつ成長し、数多くの試練もありましたが、若手や未経験の女性スタッフも加わり、今では多様性とあたたかさに満ちた“人でつながるチーム”ができました。
            </p>
            <p className="font-rounded text-lg font-bold text-foreground">
              そして、私たちが大切にしている言葉があります。「すべては世のため人のために」
            </p>
            <p>
              私たちが手がけるリフォームは、ただの工事ではありません。感謝される仕事、笑顔をつくる仕事、感動を届ける仕事——それが、私たちの誇りです。
              お客様、地域の皆さま、そして取引先の皆さまに支えられながら、これからも“想いに応えるリフォーム”を届けていきます。
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-right">
            <p className="text-sm text-muted-foreground">
              {company.brand}　{company.legal}
            </p>
            <p className="font-rounded text-lg font-bold text-foreground">
              代表取締役　{company.representative}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
