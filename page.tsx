"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Star,
  ThumbsUp,
  ChevronRight,
  MapPin,
  Mail,
  ArrowRight,
  Bath,
  CookingPotIcon as Kitchen,
  TableIcon as Toilet,
  Flame,
  Paintbrush,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Home,
  FileText,
  MessageSquare,
  HelpCircleIcon,
  Briefcase,
  Contact,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // 顧客の声データ
  const testimonials = [
    {
      name: "K様",
      location: "大田区在住",
      age: "40代・ご夫婦",
      service: "ユニットバス交換",
      comment:
        "3社比較の末にRe:Homeさんへ。3Dで完成イメージが事前に見られて安心でした。浴室が暖かくなり、子どもとゆっくり入浴するのが楽しみに！",
    },
    {
      name: "T様",
      location: "品川区在住",
      age: "30代・共働き",
      service: "キッチン交換・クロス貼替",
      comment:
        '仕事が忙しく時間が取れない中、柔軟なスケジューリングに助けられました。提案力も高く、"私たちの生活に合ったキッチン"を実現できました。',
    },
    {
      name: "S様",
      location: "港区在住",
      age: "50代・単身",
      service: "水回りフルリフォーム",
      comment:
        "古くて不便だったキッチンと浴室が一新。工事中も丁寧に説明してくれて、信頼できる業者さんだと実感しました。",
    },
    {
      name: "Y様",
      location: "目黒区在住",
      age: "60代・ご夫婦",
      service: "トイレ＋段差解消リフォーム",
      comment:
        "高齢の母のためにバリアフリーに。リフォーム前に細かい配慮をしてくれて安心感がありました。今後もお願いしたいです。",
    },
    {
      name: "I様",
      location: "幸区在住",
      age: "40代・子育て世帯",
      service: "子供部屋リフォーム",
      comment:
        '壁紙選びが楽しく、収納も子どもに合わせた設計で大満足です。"自分の部屋ができた！"と喜ぶ顔が忘れられません。',
    },
    {
      name: "O様",
      location: "大田区在住",
      age: "30代・新婚",
      service: "クロス貼替＋照明変更",
      comment:
        "LINEでのやり取りがスムーズで、若いスタッフさんも丁寧で親切。これからも住まいの相談をお願いしたいと思います。",
    },
    {
      name: "H様",
      location: "品川区在住",
      age: "50代・夫婦二人暮らし",
      service: "キッチン＋床張替",
      comment:
        "提案内容が理にかなっていて、見た目も機能性も抜群。以前のリフォーム業者とは比べものにならない丁寧さでした。",
    },
    {
      name: "M様",
      location: "港区在住",
      age: "40代・女性",
      service: "トイレ＋収納造作",
      comment:
        '仕事で留守がちでも、安心してお任せできました。工事中の進行報告が分かりやすく、リフォームが"楽しみ"になりました。',
    },
    {
      name: "K様",
      location: "目黒区在住",
      age: "60代・一人暮らし",
      service: "浴室交換＋エコ素材施工",
      comment:
        "自然素材の提案がとても丁寧で、健康にも配慮されていると感じました。空気が変わったような気がして、毎日が快適です。",
    },
    {
      name: "W様",
      location: "幸区在住",
      age: "30代・共働き",
      service: "キッチン＋リビング一部リノベ",
      comment:
        'インテリアセンスが素晴らしく、女性スタッフの視点がありがたかったです。"自分の生活にフィットする空間"が実現できました。',
    },
  ]

  // スクロール監視の設定
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveSection(index)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  // 特定のセクションへスクロール
  const scrollToSection = (index: number) => {
    setMobileMenuOpen(false)
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  // ナビゲーションアイテム
  const navItems = [
    { name: "ホーム", icon: <Home className="h-4 w-4" /> },
    { name: "サービス内容", icon: <FileText className="h-4 w-4" /> },
    { name: "施工事例", icon: <Home className="h-4 w-4" /> },
    { name: "お客様の声", icon: <MessageSquare className="h-4 w-4" /> },
    { name: "Q&A", icon: <HelpCircleIcon className="h-4 w-4" /> },
    { name: "採用情報", icon: <Briefcase className="h-4 w-4" /> },
    { name: "お問い合わせ", icon: <Contact className="h-4 w-4" /> },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DVLB2364.PNG-sJd7gyHAcDPc7MpzoCFuYTSMqs7gxu.png"
                alt="Re:Home Design - 大田区・品川区・港区・目黒区のおすすめリフォーム会社"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-handwriting">Re:Home Design</span>
              <span className="text-xs text-muted-foreground">理想の暮らしは、想像より近くにある。</span>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`text-sm font-medium relative group transition-colors ${
                  activeSection === index ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === index ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <Button
            size="sm"
            className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105"
            onClick={() => scrollToSection(6)}
          >
            無料相談はこちら
          </Button>

          {/* モバイルメニューボタン */}
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden">
            <div className="container flex flex-col h-full">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DVLB2364.PNG-sJd7gyHAcDPc7MpzoCFuYTSMqs7gxu.png"
                      alt="Re:Home Design - 大田区・品川区・港区・目黒区のリフォーム専門店"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-primary font-handwriting">Re:Home Design</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-8">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className="flex items-center gap-3 py-3 px-4 text-lg font-medium hover:bg-muted rounded-md"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => {
                    scrollToSection(6)
                    setMobileMenuOpen(false)
                  }}
                >
                  無料相談はこちら
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* スクロールインジケーター */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
              }`}
              aria-label={`Scroll to section ${index + 1}`}
            />
          ))}
      </div>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="min-h-screen flex items-center relative snap-start"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-living-room.png"
              alt="大田区・品川区・港区・目黒区のリフォーム実例 - 明るく開放的な自然光が差し込むリビングルーム"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-2">
                <Star className="h-3 w-3 mr-1" /> 創業17年 実績10,000件突破 | 大田区・品川区・港区・目黒区対応
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                理想の暮らしは、
                <br />
                想像より近くにある。
              </h1>
              <p className="text-xl md:text-2xl font-medium animate-fade-in-delayed">
                大田区初！3Dシミュレーション×エコ素材で
                <br />
                叶える<span className="text-accent font-bold">理想のリフォーム</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-base bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105"
                  onClick={() => scrollToSection(6)}
                >
                  無料相談はこちら <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-white/10 backdrop-blur-sm border-primary hover:bg-white/20"
                  onClick={() => scrollToSection(2)}
                >
                  施工事例を見る
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/80" />
          </div>
        </section>

        {/* Main Services Section */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          id="services"
          className="min-h-screen py-16 md:py-24 bg-secondary/30 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                大田区・品川区・港区・目黒区で<span className="text-accent">おすすめのリフォームサービス</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                <span className="font-handwriting text-xl text-primary">Re:Home Design</span>では
                <span className="font-medium">設計から施工、アフターメンテナンスまで</span>
                すべて自社で一貫して対応いたします。評判・口コミ多数の実績豊富な会社です。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Bath className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">ユニットバス交換</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    大田区・品川区で評判のユニットバス交換。ゆったり快適、毎日がリラックスタイムに。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Kitchen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">キッチンリフォーム</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    品川区で口コミ高評価のキッチンリフォーム。お料理が楽しくなる、家族の笑顔が広がる空間へ。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Toilet className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">トイレ交換</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    港区で適正価格のトイレ交換。節水＋清潔で、いつでも快適な空間に。費用相談も歓迎。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">給湯器・コンロ交換</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    大田区・品川区で人気のエコリフォーム。快適＆エコな暮らしをサポート。補助金申請もお手伝い。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Paintbrush className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">クロス貼替</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    目黒区で安心の費用設定のクロス貼替。お部屋の印象が見違えるリフレッシュ術。小規模工事も対応可能。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">ハウスクリーニング</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    大田区・品川区・港区・目黒区で評判のハウスクリーニング。プロの手で、住まいをピカピカに再生。
                  </p>
                </CardContent>
                <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                すべてのサービスを見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          id="projects"
          className="min-h-screen py-16 md:py-24 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                実際の<span className="text-accent">施工事例</span>をご紹介！
              </h2>
              <p className="text-lg text-muted-foreground">
                多くのお客様にご満足いただいた<span className="font-medium">大田区・品川区・港区・目黒区</span>
                での施工事例をご覧ください。
                <span className="font-medium">すべて自社施工</span>で高品質な仕上がりを実現しています。
              </p>
            </div>

            <Tabs defaultValue="case1" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 mx-auto">
                <TabsTrigger
                  value="case1"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  キッチン＆浴室
                </TabsTrigger>
                <TabsTrigger
                  value="case2"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  バリアフリー
                </TabsTrigger>
                <TabsTrigger
                  value="case3"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  外壁改修
                </TabsTrigger>
              </TabsList>

              <TabsContent value="case1" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="大田区のキッチン＆浴室リフォーム事例 - 品川区でも人気のデザイン"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 w-fit">
                      30代共働き世帯 | 品川区在住
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">キッチン＆浴室リフォーム</h3>
                    <p className="text-muted-foreground mb-4">
                      動線を見直して家事効率アップ！明るく開放的な空間に。品川区で評判の高いリフォーム事例です。
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">工期</span>
                        <span className="font-medium">10日間</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">費用</span>
                        <span className="font-medium">120万円</span>
                      </div>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg mb-6 relative">
                      <div className="absolute top-0 left-6 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45"></div>
                      <blockquote className="italic">
                        「短期間で理想のキッチンが完成しました！ARシミュレーションで安心して依頼できました。自社施工なので担当者が最初から最後まで同じで安心でした。」
                      </blockquote>
                      <p className="text-right text-sm mt-2 text-muted-foreground">品川区 S様</p>
                    </div>
                    <Button className="mt-2 w-fit bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="case2" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="目黒区のバリアフリー＋外壁改修リフォーム事例 - 港区でも評判の高い施工"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 w-fit">
                      50代ご夫婦 | 目黒区在住
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">バリアフリー＋外壁改修</h3>
                    <p className="text-muted-foreground mb-4">
                      安心して暮らせる家に。段差解消と断熱性能の強化で快適さUP。港区でも人気のバリアフリーリフォーム事例です。
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">工期</span>
                        <span className="font-medium">20日間</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">費用</span>
                        <span className="font-medium">280万円</span>
                      </div>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg mb-6 relative">
                      <div className="absolute top-0 left-6 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45"></div>
                      <blockquote className="italic">
                        「段差解消や手すり設置など、老後も安心して住める家になりました。設計から施工まで一貫して対応してもらえたので安心でした。」
                      </blockquote>
                      <p className="text-right text-sm mt-2 text-muted-foreground">目黒区 K様</p>
                    </div>
                    <Button className="mt-2 w-fit bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="case3" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="大田区の外壁リフォーム事例 - 品川区・港区・目黒区でも評判の高い施工実績"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 w-fit">
                      40代ファミリー | 大田区在住
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">外壁全面リフォーム</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">工期</span>
                        <span className="font-medium">15日間</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">費用</span>
                        <span className="font-medium">220万円</span>
                      </div>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg mb-6 relative">
                      <div className="absolute top-0 left-6 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45"></div>
                      <blockquote className="italic">
                        「外観が一新され、断熱性能も向上。夏も冬も快適に過ごせるようになりました。アフターメンテナンスも定期的にしていただけるので安心です。」
                      </blockquote>
                      <p className="text-right text-sm mt-2 text-muted-foreground">大田区 T様</p>
                    </div>
                    <Button className="mt-2 w-fit bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                施工事例をもっと見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          id="testimonials"
          className="min-h-screen py-16 md:py-24 bg-secondary/30 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                お客様の<span className="text-accent">喜びの声</span>と評判
              </h2>
              <p className="text-lg text-muted-foreground">
                大田区・品川区・港区・目黒区のお客様から寄せられた口コミをご紹介します。
                <span className="font-medium">お客様の満足</span>が私たちの原動力です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary">
                          {testimonial.location} {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.age}</CardDescription>
                      </div>
                      <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                        {testimonial.service}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="italic text-muted-foreground">「{testimonial.comment}」</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                もっと見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 flex items-center">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                料金も工期も<span className="text-accent">安心</span>。明確なプランをご提案します。
              </h2>
              <p className="text-lg text-muted-foreground">
                透明性のある価格設定で、安心してリフォームをご検討いただけます。
                <span className="font-medium">現地調査後に正確なお見積りを提示</span>いたします。
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">工事内容</th>
                    <th className="p-4 text-left">費用（目安）</th>
                    <th className="p-4 text-left">工期（目安）</th>
                    <th className="p-4 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/40">
                    <td className="p-4 font-medium">ユニットバス交換</td>
                    <td className="p-4">80万円〜150万円</td>
                    <td className="p-4">5日〜1週間</td>
                    <td className="p-4">断熱・保温性能向上、節水設計、大田区・品川区で人気</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-muted/30">
                    <td className="p-4 font-medium">キッチンリフォーム</td>
                    <td className="p-4">60万円〜115万円</td>
                    <td className="p-4">2〜3週間</td>
                    <td className="p-4">収納力アップ、IH対応可、品川区で評判の高いデザイン</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="p-4 font-medium">トイレ交換</td>
                    <td className="p-4">20万円〜40万円</td>
                    <td className="p-4">1〜2日</td>
                    <td className="p-4">節水型、自動洗浄機能、港区で口コミ多数</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-muted/30">
                    <td className="p-4 font-medium">給湯器交換</td>
                    <td className="p-4">15万円〜30万円</td>
                    <td className="p-4">半日〜1日</td>
                    <td className="p-4">エコジョーズ対応、省エネ設計、補助金申請サポート</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">クロス貼替（6畳間）</td>
                    <td className="p-4">5万円〜10万円</td>
                    <td className="p-4">1〜2日</td>
                    <td className="p-4">消臭・抗菌機能付き素材あり、目黒区で安い価格設定</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              ※価格・工期は目安です。現地調査後に正式なお見積もりをご案内いたします。大田区・品川区・港区・目黒区対応。
            </p>

            <div className="mt-8 bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">お見積り・ご相談について</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">無料現地調査実施</p>
                    <p className="text-muted-foreground text-sm">
                      お客様のご要望をしっかりとヒアリングし、最適なプランをご提案します。大田区・品川区・港区・目黒区対応。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">明確な見積り</p>
                    <p className="text-muted-foreground text-sm">
                      追加費用が発生しないよう、事前に詳細な見積りをご提示します。比較検討も歓迎です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">分割払い対応</p>
                    <p className="text-muted-foreground text-sm">
                      リフォームローンや各種クレジットカード決済に対応しています。安心の価格設定。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">補助金申請サポート</p>
                    <p className="text-muted-foreground text-sm">
                      省エネリフォームの補助金申請をサポートします。品川区・大田区の制度に精通。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                無料お見積りを依頼する <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          id="faq"
          className="min-h-screen py-16 md:py-24 bg-secondary/30 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                よくある<span className="text-accent">質問</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                大田区・品川区・港区・目黒区のお客様からよくいただくご質問とその回答をまとめました。その他のご質問は
                <span className="font-medium">お気軽にお問い合わせ</span>ください。
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border/40">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>リフォーム工事中は家に住めますか？</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    <p>
                      工事の内容によりますが、多くの場合は在宅での対応が可能です。キッチンやトイレなど部分的なリフォームであれば、ほとんどの場合そのまま住みながら工事が可能です。大規模なリフォームの場合は、一時的な仮住まいをご提案することもあります。事前の打ち合わせで詳細をご説明いたします。大田区・品川区・港区・目黒区で多数の実績があります。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border/40">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>リフォーム後の保証はどうなっていますか？</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    <p>
                      内容に応じて最長10年の保証がつきます。当社では、工事完了後2年間の保証を標準でご提供しています。また、自社施工・自社アフターメンテナンスのため、保証期間終了後も安心してご相談いただけます。さらに、オプションで最長10年の長期保証プランもご用意しています。詳細はご相談時にご説明いたします。大田区・品川区・港区・目黒区で評判の高いアフターサービスを提供しています。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border/40">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>古い建物でもリフォームは可能ですか？</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    <p>
                      はい、可能です。状態を確認の上、最適なプランをご提案します。ただし、建物の状態によっては補強工事が必要になる場合があります。当社では無料の現地調査で建物の状態を詳しく確認し、最適なリフォームプランをご提案いたします。築年数が古い場合でも、耐震補強を含めた総合的なリフォームプランをご用意できます。大田区・品川区の古い住宅のリノベーション実績も豊富です。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border/40">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>リフォームの補助金について教えてください</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    <p>
                      各自治体によって異なりますが、省エネ性能を高めるリフォームや耐震改修、バリアフリー化などに対して補助金が出る場合があります。特に品川区・大田区では、エコリフォームに対する補助金制度が充実しています。当社では、お客様に合った補助金制度をご案内し、申請手続きもサポートいたします。補助金を活用することで、より高品質なリフォームを実現できる場合もありますので、お気軽にご相談ください。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-border/40">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>和室から洋室への改装は可能ですか？</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    <p>
                      はい、和室から洋室への改装は当社の得意分野の一つです。畳をフローリングに変更し、壁や天井も洋室仕様に変更することで、モダンな空間に生まれ変わります。目黒区や港区のお客様からも多くご依頼いただいている人気のリフォームです。和室特有の段差解消も同時に行うことで、バリアフリー化も実現できます。お客様のライフスタイルに合わせた最適な提案をいたしますので、ぜひご相談ください。
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                その他の質問を見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Recruitment Section */}
        <section
          ref={(el) => (sectionRefs.current[5] = el)}
          id="careers"
          className="min-h-screen py-16 md:py-24 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                住まいづくりを、<span className="text-accent">一緒に楽しみませんか？</span>
              </h2>
              <p className="text-xl text-primary font-medium">
                <span className="font-handwriting text-2xl">Re:Home Design</span>が求める人材像
              </p>
              <p className="mt-4 text-lg">「住まいの未来を共に創る仲間を募集します」</p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-primary">現在募集中の職種</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left">職種</th>
                      <th className="p-4 text-left">業務内容</th>
                      <th className="p-4 text-left">求める人物像</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="p-4 font-medium">リフォームプランナー</td>
                      <td className="p-4">顧客ヒアリング・3D設計・補助金申請代行</td>
                      <td className="p-4">空間デザイン感覚×コミュニケーション力</td>
                    </tr>
                    <tr className="border-b border-border/40 bg-muted/30">
                      <td className="p-4 font-medium">インテリアデザイナー</td>
                      <td className="p-4">エコ建材活用提案・施工図面作成</td>
                      <td className="p-4">サステナブル思考×CAD操作スキル</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-4 font-medium">デジタル営業</td>
                      <td className="p-4">ARシミュレーション活用営業・オンライン商談</td>
                      <td className="p-4">IT適応力×提案型営業経験</td>
                    </tr>
                    <tr className="border-b border-border/40 bg-muted/30">
                      <td className="p-4 font-medium">施工管理技士</td>
                      <td className="p-4">IoT建材施工・AIメンテナンス連動</td>
                      <td className="p-4">建築基準法知識×新しい技術への好奇心</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="p-4 font-medium">女性プランナー</td>
                      <td className="p-4">LP改善・VR体験コンテンツ制作</td>
                      <td className="p-4">UI/UXデザインスキル×女性目線の提案力</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">幹部候補</td>
                      <td className="p-4">新店舗立上げ・人材育成</td>
                      <td className="p-4">リーダーシップ×業界経験5年以上</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Star className="h-4 w-4 text-primary" />
                  </span>
                  働き方改革施策
                </h3>
                <p className="text-lg mb-4 font-medium">「フレックスタイム制、副業解禁制度など柔軟な働き方を推進」</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">【働き方改革推進中】</h4>
                  <ul className="space-y-2 pl-5 list-disc">
                    <li>残業少なめ・柔軟な勤務体制</li>
                    <li>リモートワーク対応（職種による）</li>
                    <li>有給休暇取得推進</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Star className="h-4 w-4 text-primary" />
                  </span>
                  福利厚生充実
                </h3>
                <p className="text-lg mb-4 font-medium">「成長を応援する風通しの良いチーム」</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">資格支援：</span>
                      資格取得費用全額補助（インテリアコーディネーター等）
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">住宅手当：</span>大田区内居住者に月2万円追加
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                採用情報の詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={(el) => (sectionRefs.current[6] = el)}
          id="contact"
          className="min-h-screen py-16 md:py-24 bg-secondary/30 flex items-center snap-start"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
                まずはお気軽に<span className="text-accent">ご相談</span>ください！
              </h2>
              <p className="text-lg text-muted-foreground">
                大田区・品川区・港区・目黒区のリフォームに関するご質問やお見積りのご依頼など、お気軽にお問い合わせください。
                <span className="font-medium">設計から施工、アフターメンテナンスまで</span>一貫してサポートいたします。
              </p>
              <p className="text-sm mt-2 font-medium text-accent">※簡単30秒入力でOK！無料相談受付中</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      お名前
                    </label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      required
                      className="rounded-md border-muted-foreground/30 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@example.com"
                      required
                      className="rounded-md border-muted-foreground/30 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      電話番号
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="090-1234-5678"
                      className="rounded-md border-muted-foreground/30 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium">
                      お住まいの地域
                    </label>
                    <select
                      id="area"
                      className="w-full rounded-md border-muted-foreground/30 focus:border-primary focus:ring-primary"
                    >
                      <option value="">選択してください</option>
                      <option value="大田区">大田区</option>
                      <option value="品川区">品川区</option>
                      <option value="港区">港区</option>
                      <option value="目黒区">目黒区</option>
                      <option value="幸区">幸区</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      お問い合わせ内容
                    </label>
                    <Textarea
                      id="message"
                      placeholder="ご希望のリフォーム内容、ご予算などをご記入ください。"
                      rows={4}
                      className="rounded-md border-muted-foreground/30 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                    送信する
                  </Button>
                </form>
              </div>

              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">本社</p>
                      <p className="text-muted-foreground">〒143-0016 東京都大田区大森北1-2-3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">電話番号</p>
                      <p className="text-muted-foreground">03-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">メールアドレス</p>
                      <p className="text-muted-foreground">info@rehomedesign.co.jp</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">対応エリア</h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="bg-primary/5 p-3 rounded-md text-center">
                      <p className="font-medium">大田区</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-md text-center">
                      <p className="font-medium">品川区</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-md text-center">
                      <p className="font-medium">港区</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-md text-center">
                      <p className="font-medium">目黒区</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">SNSでも情報発信中！</h3>
                  <div className="flex gap-4">
                    <Link href="#" className="hover:opacity-75 transition-opacity">
                      <Instagram className="h-8 w-8 text-muted-foreground" />
                    </Link>
                    <Link href="#" className="hover:opacity-75 transition-opacity">
                      <Facebook className="h-8 w-8 text-muted-foreground" />
                    </Link>
                    <Link href="#" className="hover:opacity-75 transition-opacity">
                      <MessageCircle className="h-8 w-8 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DVLB2364.PNG-sJd7gyHAcDPc7MpzoCFuYTSMqs7gxu.png"
                alt="Re:Home Design - 大田区・品川区・港区・目黒区のリフォーム会社"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary font-handwriting">Re:Home Design</span>
              <span className="text-xs text-muted-foreground">理想の暮らしは、想像より近くにある。</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">&copy; 2024 Re:Home Design. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">大田区・品川区・港区・目黒区のリフォーム専門店</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
