"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function InterfaceInterferencePage() {
  const [showCookieDialog, setShowCookieDialog] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Interferenza dell'Interfaccia"
        description="Elementi dell'interfaccia progettati per indurre in errore"
      />

      <Card>
        <CardHeader>
          <CardTitle>Interferenza dell'Interfaccia</CardTitle>
          <CardDescription>
            Design visivo che confonde gli utenti e li induce a compiere azioni non desiderate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border relative">
            <h3 className="text-xl font-semibold mb-4">Esempio di Interferenza dell'Interfaccia</h3>

            {/* Esempio 1: Pulsanti confusi */}
            <div className="mb-8 p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Pulsanti confusi</h4>
              <p className="text-sm mb-4">Vuoi annullare il tuo abbonamento?</p>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="bg-white text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                >
                  Annulla
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600">Mantieni abbonamento</Button>
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                Nota: Il pulsante "Annulla" qui è ambiguo - annulla l'operazione o l'abbonamento?
              </p>
            </div>

            {/* Esempio 2: Falsi elementi UI */}
            <div className="mb-8 p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Falsi elementi UI</h4>

              <div className="relative border rounded p-3 bg-white">
                <div className="absolute top-3 right-3 flex items-center">
                  <div
                    className="w-4 h-4 rounded-full bg-gray-300 mr-1 cursor-pointer"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  ></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 cursor-pointer"></div>
                </div>

                {showTooltip && (
                  <div className="absolute top-8 right-3 bg-black text-white text-xs p-1 rounded z-10">
                    Questi non sono veri controlli, solo decorazioni
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-medium text-sm">Notifica importante</p>
                    <p className="text-xs text-muted-foreground">Il tuo account richiede verifica</p>
                  </div>
                </div>

                <p className="text-sm mb-3">
                  Abbiamo rilevato un'attività insolita sul tuo account. Per favore verifica la tua identità.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/placeholder.svg?height=60&width=120"
                    alt="Falsa immagine di sicurezza"
                    className="w-full h-auto border rounded"
                  />
                  <img
                    src="/placeholder.svg?height=60&width=120"
                    alt="Falsa immagine di sicurezza"
                    className="w-full h-auto border rounded"
                  />
                </div>
              </div>
            </div>

            {/* Esempio 3: Cookie banner ingannevole */}
            {showCookieDialog && (
              <div className="fixed inset-x-0 bottom-0 p-4 bg-white border-t shadow-lg md:flex md:items-center md:justify-between z-50">
                <div className="md:flex-1 md:pr-4">
                  <h4 className="font-medium mb-1">Questo sito utilizza i cookie</h4>
                  <p className="text-sm text-muted-foreground mb-3 md:mb-0">
                    Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare, accetti l'uso di
                    tutti i cookie.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="order-2 sm:order-1"
                    onClick={() => setShowCookieDialog(false)}
                  >
                    Personalizza
                  </Button>
                  <Button size="sm" className="order-1 sm:order-2" onClick={() => setShowCookieDialog(false)}>
                    Accetta tutti
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Spiegazione del Dark Pattern
            </h4>
            <p className="text-sm mt-1">
              L'"Interferenza dell'Interfaccia" comprende vari trucchi visivi e di design che confondono gli utenti e li
              inducono a compiere azioni non desiderate. Questo pattern include:
            </p>
            <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
              <li>
                Pulsanti con etichette ambigue (come "Annulla" che potrebbe significare annullare l'operazione o
                l'abbonamento)
              </li>
              <li>Falsi elementi dell'interfaccia che sembrano interattivi ma non lo sono</li>
              <li>Banner dei cookie che rendono difficile rifiutare i cookie non essenziali</li>
              <li>Colori e contrasti che guidano l'attenzione verso opzioni sfavorevoli all'utente</li>
              <li>Elementi che sembrano notifiche di sistema ma sono in realtà pubblicità</li>
            </ul>
            <p className="text-sm mt-2">
              Questo pattern viola i principi di trasparenza e chiarezza, manipolando deliberatamente l'interfaccia per
              indurre gli utenti a compiere azioni che non avrebbero scelto con un design più chiaro.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

