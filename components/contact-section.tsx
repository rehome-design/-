"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react"
import { company } from "@/lib/site"

const methods = ["オンライン相談", "対面（ご訪問）", "来店", "LINE"] as const

export function ContactSection() {
  const [method, setMethod] = useState<(typeof methods)[number]>("オンライン相談")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 font-rounded text-sm font-bold tracking-wide text-accent-foreground">CONTACT</p>
          <h2 className="font-rounded text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl">
            まずはお気軽に<span className="text-primary">ご相談</span>ください
          </h2>
          <p className="mt-4 text-muted-foreground">
            ご相談・現地調査・お見積りはすべて無料。LINE・Web予約・お電話、ご都合の良い方法でどうぞ。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* 左：LINE / 電話 / 会社情報 */}
          <div className="flex flex-col gap-4">
            <a
              href={company.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[#06C755] p-6 text-white shadow-sm transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-9 w-9 shrink-0" />
              <div>
                <p className="font-rounded text-lg font-bold">LINEで予約・相談</p>
                <p className="text-sm text-white/90">24時間受付・写真を送るだけで概算見積りOK</p>
              </div>
            </a>

            <a
              href={`tel:${company.tel.replace(/-/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-primary bg-card p-6 text-primary shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-9 w-9 shrink-0" />
              <div>
                <p className="font-rounded text-lg font-bold">{company.tel}</p>
                <p className="text-sm text-muted-foreground">{company.hours}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-3 font-rounded font-bold text-foreground">
                {company.brand}（{company.legal}）
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {company.address}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {company.email}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  {company.hours}
                </li>
              </ul>
            </div>
          </div>

          {/* 右：Web予約フォーム */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className="mb-5 font-rounded text-lg font-bold text-foreground">Web予約フォーム</p>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <p className="font-rounded text-xl font-bold text-foreground">送信ありがとうございます！</p>
                <p className="text-sm text-muted-foreground">
                  担当者より1営業日以内にご連絡いたします。お急ぎの場合はLINEまたはお電話ください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input id="name" name="name" required placeholder="山田 太郎" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="phone">電話番号 *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="090-1234-5678" />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="email">メールアドレス *</Label>
                  <Input id="email" name="email" type="email" required placeholder="example@email.com" />
                </div>

                <div className="grid gap-1.5">
                  <Label>ご希望の相談方法</Label>
                  <div className="flex flex-wrap gap-2">
                    {methods.map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMethod(m)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                          method === m
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="area">お住まいのエリア</Label>
                  <Input id="area" name="area" placeholder="例：大田区東糀谷" />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="message">ご相談内容</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="例：築20年の戸建てのユニットバスを交換したいです。"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  この内容で予約・相談を送信する
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  送信いただいた内容は、ご相談対応の目的のみに使用します。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
