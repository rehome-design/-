"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Bath,
  CookingPotIcon as Kitchen,
  Flame,
  Paintbrush,
  Sparkles,
  Star,
  TableIcon as Toilet,
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function VerticalPage() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  return (
    <div className="vertical-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-living-room.png"
            alt="大田区のリフォーム実例 - 明るく開放的な自然光が差し込むリビングルーム"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-2">
              <Star className="h-3 w-3 mr-1" /> 創業17年 実績10,000件突破
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
              理想の暮らしは、
              <br />
              想像より近くにある。
            </h1>
            <p className="text-xl md:text-2xl font-medium animate-fade-in-delayed">
              大田区初！"未来の暮らし"をリアルに体験。
              <br />
              <span className="text-accent font-bold">3Dシミュレーション×エコ素材</span>で叶える快適リフォーム
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-base bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105"
              >
                まずは無料でご相談 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 backdrop-blur-sm border-primary hover:bg-white/20"
              >
                実際の施工事例を見る
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">スクロールしてください</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-16 md:py-24 bg-secondary/30 flex items-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
              Re:Home Designが提供する<span className="text-accent">リフォームサービス</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              <span className="font-handwriting text-xl text-primary">Re:Home Design</span>では
              <span className="font-medium">設計から施工、アフターメンテナンスまで</span>
              すべて自社で一貫して対応いたします。
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
                <p className="text-muted-foreground">ゆったり快適、毎日がリラックスタイムに。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group overflow-hidden">
              <CardHeader className="pb-2 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Kitchen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">キッチン交換</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">お料理が楽しくなる、家族の笑顔が広がる空間へ。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
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
                <p className="text-muted-foreground">節水＋清潔で、いつでも快適な空間に。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
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
                <p className="text-muted-foreground">快適＆エコな暮らしをサポート。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
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
                <p className="text-muted-foreground">お部屋の印象が見違えるリフレッシュ術。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
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
                <p className="text-muted-foreground">プロの手で、住まいをピカピカに再生。</p>
              </CardContent>
              <CardFooter className="pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
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

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen py-16 md:py-24 flex items-center">
        <div className="container">\
\
