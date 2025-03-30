"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, X } from "lucide-react"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function NaggingPage() {
  const [dismissedCount, setDismissedCount] = useState(0)
  const [showPopup, setShowPopup] = useState(true)

  const handleDismiss = () => {
    setShowPopup(false)
    setDismissedCount((prev) => prev + 1)

    // Mostra nuovamente il popup dopo un breve ritardo
    if (dismissedCount < 3) {
      setTimeout(() => {
        setShowPopup(true)
      }, 3000)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Insistenza (Nagging)"
        description="Interruzioni ripetute che disturbano l'esperienza dell'utente"
      />

      <Card className="border-t-4 border-t-blue-500 shadow-md">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle>Insistenza (Nagging)</CardTitle>
          <CardDescription>Interrompere ripetutamente l'utente con richieste o notifiche</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm relative min-h-[400px]">
            <h3 className="text-xl font-semibold mb-4">Il nostro blog</h3>

            <div className="prose prose-sm max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                enim.
              </p>
              <p>
                Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
                cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
                molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet.
              </p>
            </div>

            {showPopup && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={handleDismiss}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <h3 className="text-xl font-bold mb-2">📱 Scarica la nostra app!</h3>
                  <p className="mb-4">
                    Goditi un'esperienza migliore con la nostra app mobile. È più veloce e più comoda!
                  </p>

                  <div className="grid gap-2">
                    <Button>Scarica ora</Button>
                    <Button variant="ghost" className="text-xs text-muted-foreground" onClick={handleDismiss}>
                      {dismissedCount === 0
                        ? "Non ora"
                        : dismissedCount === 1
                          ? "No grazie"
                          : dismissedCount === 2
                            ? "Ho già detto no"
                            : "SMETTI DI CHIEDERMELO!"}
                    </Button>
                  </div>
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
              L'insistenza (nagging) interrompe ripetutamente l'esperienza dell'utente con la stessa richiesta, anche
              dopo che l'utente l'ha rifiutata. Questo pattern sfrutta la stanchezza dell'utente: dopo diverse
              interruzioni, molti utenti cederanno solo per liberarsi del fastidio. Notare come il testo del pulsante di
              rifiuto cambi per riflettere la frustrazione crescente dell'utente, ma il popup continua comunque a
              riapparire.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

