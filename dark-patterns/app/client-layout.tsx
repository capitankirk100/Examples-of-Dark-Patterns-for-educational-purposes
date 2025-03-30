"use client"

import type React from "react"

import "@/app/globals.css"
import Link from "next/link"
import { TelegramBanner } from "@/components/telegram-banner"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TelegramBanner />
      <header className="border-b py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Dark Patterns Demo
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t py-8 mt-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Questa è una dimostrazione educativa di dark pattern. Non utilizzare queste tecniche nei tuoi progetti
            reali.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dark Patterns Demo - Creato a scopo educativo
          </p>
        </div>
      </footer>
    </>
  )
}

