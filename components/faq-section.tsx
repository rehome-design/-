import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "リフォーム工事中は家に住めますか？",
    a: "多くの工事は住みながら施工が可能です。水回りなど一時的にご不便が出る場合は、工程を調整し、影響を最小限に抑えたスケジュールをご提案します。",
  },
  {
    q: "なぜ他社より価格を抑えられるのですか？",
    a: "下請けに丸投げせず自社の職人が直接施工するため、中間マージンが発生しません。同じ品質でも余計なコストがかからない分、適正価格でご提供できます。",
  },
  {
    q: "リフォーム後の保証はどうなっていますか？",
    a: "工事内容に応じて最長10年の自社保証をお付けします。定期点検とAI予測メンテナンスで、施工後も長く安心して暮らせる体制を整えています。",
  },
  {
    q: "古い建物でもリフォームは可能ですか？",
    a: "築年数の古い建物や中古マンションも多数の実績があります。現地調査で建物の状態を確認し、最適な工法をご提案しますのでご安心ください。",
  },
  {
    q: "見積もりは無料ですか？しつこい営業はありませんか？",
    a: "現地調査・お見積りはすべて無料です。ご納得いただくまで工事は行わず、無理な営業も一切いたしませんのでお気軽にご相談ください。",
  },
  {
    q: "対応エリアを教えてください。",
    a: "大田区を中心に、品川区・港区・目黒区・川崎市など近隣エリアに対応しています。エリア外の方も一度ご相談ください。",
  },
  {
    q: "補助金や介護保険は使えますか？",
    a: "省エネ改修の補助金やバリアフリー改修の介護保険など、各種制度に対応しています。複雑な申請手続きも専任スタッフがサポートします。",
  },
  {
    q: "支払い方法やローンは選べますか？",
    a: "現金・銀行振込のほか、各種リフォームローンや分割払いにも対応しています。ご予算に合わせた無理のないお支払い方法をご提案します。",
  },
  {
    q: "工事の期間はどのくらいかかりますか？",
    a: "トイレ交換なら半日〜1日、ユニットバスは5〜7日程度が目安です。工事内容により異なりますので、お見積り時に具体的な工期をお伝えします。",
  },
  {
    q: "LINEやWebだけで相談・予約できますか？",
    a: "はい。LINE・Web予約フォームから24時間ご相談・ご予約いただけます。写真を送っていただければ、オンラインでの概算お見積りも可能です。",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">Q&amp;A</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            よくある<span className="text-primary">ご質問</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left font-rounded font-bold text-foreground hover:no-underline">
                  <span className="flex items-start gap-2">
                    <span className="text-primary">Q.</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
