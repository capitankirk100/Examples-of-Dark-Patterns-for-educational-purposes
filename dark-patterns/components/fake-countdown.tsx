"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  initialMinutes: number
  initialSeconds: number
}

export function FakeCountdown({ initialMinutes = 10, initialSeconds = 0 }: CountdownProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  // Effetto per il countdown
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        // Quando il timer raggiunge zero, lo resettiamo a un valore casuale
        // Questo è il "fake" nel countdown - non scade mai veramente
        if (minutes === 0 && seconds === 0) {
          const randomMinutes = Math.floor(Math.random() * 5) + 8 // Tra 8 e 12 minuti
          setMinutes(randomMinutes)
          setSeconds(Math.floor(Math.random() * 60))
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [minutes, seconds])

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-red-600 mb-1">Offerta a tempo limitato!</p>
      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-md inline-flex items-center gap-1 font-mono">
        <span>{String(minutes).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  )
}

