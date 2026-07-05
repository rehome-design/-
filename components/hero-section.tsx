import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarCheck, MessageCircle, Star, ShieldCheck, Sparkles } from "lucide-react"
import { company } from "@/lib/site"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-secondary blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="container relative grid items-center gap-10 pb-14 md:pb-20 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
              <Sparkles className="h-4 w-4" />
              大田区のリフォーム専門店
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-accent-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              口コミ評価 4.9
            </span>
          </div>

          <h1 className="font-rounded text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            大田区で
            <span className="relative inline-block">
              信頼される
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/25" />
            </span>
            、
            <br />
            <span className="text-primary">責任施工</span>のリフォーム。
            <br />
            最初から最後まで、自社の職人が。
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            設計から施工まで<span className="font-bold text-foreground">自社の職人が一貫して担当</span>。
            だから品質にも工程にも責任を持てます。創業17年・累計
            <span className="font-bold text-foreground">{company.projects}件超</span>
            の実績で、大田区・品川区・港区・目黒区の暮らしに寄り添ってきました。
            <span className="font-bold text-foreground">3Dシミュレーション</span>で完成イメージを事前に確認できるから、初めての方も安心です。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">
                <CalendarCheck className="mr-2 h-5 w-5" />
                無料相談・Web予約はこちら
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white"
            >
              <a href={company.lineUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで気軽に相談
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              自社職人による責任施工
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              最長10年のアフター保証
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              補助金申請サポート
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero-living-room.png"
              alt="大田区でRe:Home Designが自社施工したリフォーム後の明るいリビング"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-card px-5 py-4 shadow-lg md:-left-6">
            <p className="font-rounded text-2xl font-extrabold text-primary md:text-3xl">一貫責任施工</p>
            <p className="text-xs text-muted-foreground">設計から施工まで自社の職人が担当</p>
          </div>
        </div>
      </div>
    </section>
  )
}
