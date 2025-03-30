"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { FakeCountdown } from "@/components/fake-countdown"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function ScarcityPage() {
  const [itemsLeft, setItemsLeft] = useState(3)

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Scarsità e Urgenza"
        description="Dark pattern che creano un falso senso di urgenza o scarsità"
      />

      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle>Scarsità e Urgenza Artificiale</CardTitle>
          <CardDescription>
            Creare un falso senso di urgenza o limitata disponibilità per spingere all'acquisto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Prodotto in offerta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col">
                <h3 className="text-xl font-semibold">Cuffie Premium Wireless</h3>
                <div className="flex items-center gap-2 my-2">
                  <span className="text-2xl font-bold">€79,99</span>
                  <span className="text-sm line-through text-muted-foreground">€149,99</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">-47%</span>
                </div>

                <div className="my-4 space-y-3">
                  <FakeCountdown initialMinutes={10} initialSeconds={30} />

                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <p className="text-sm text-red-600 font-medium">Solo {itemsLeft} rimasti in magazzino!</p>
                  </div>

                  <div className="bg-orange-100 text-orange-800 text-sm p-2 rounded">
                    <p className="font-medium">🔥 Alta richiesta!</p>
                    <p>15 persone stanno guardando questo articolo ora</p>
                  </div>
                </div>

                <Button className="mt-auto" onClick={() => setItemsLeft((prev) => Math.max(prev - 1, 1))}>
                  Aggiungi al carrello
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Spiegazione del Dark Pattern
            </h4>
            <p className="text-sm mt-1">
              Questo pattern crea un falso senso di urgenza e scarsità per spingere gli utenti all'acquisto immediato. I
              timer di conto alla rovescia spesso si resettano o non scadono mai veramente, mentre gli indicatori di
              "pochi articoli rimasti" o "alta richiesta" sono generati artificialmente. Questi elementi sfruttano la
              paura di perdere un'opportunità (FOMO) e limitano la capacità dell'utente di prendere decisioni ponderate.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

