"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function TelegramBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Controlla se il banner è stato chiuso in precedenza
  useEffect(() => {
    const bannerClosed = localStorage.getItem("telegramBannerClosed")
    if (bannerClosed) {
      setIsVisible(false)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    localStorage.setItem("telegramBannerClosed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-center text-sm md:text-base">
          Telegram contact for new job requests{" "}
          <Link
            href="https://t.me/VTeasy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-blue-100 transition-colors"
          >
            @VTeasy
          </Link>
        </p>
        <button
          onClick={closeBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-100 transition-colors"
          aria-label="Chiudi banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

