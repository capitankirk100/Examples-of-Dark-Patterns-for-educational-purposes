"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Download, ExternalLink } from "lucide-react"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function DisguisedAdsPage() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Pubblicità Mascherate"
        description="Annunci pubblicitari progettati per sembrare contenuti o funzionalità"
      />

      <Card>
        <CardHeader>
          <CardTitle>Pubblicità Mascherate</CardTitle>
          <CardDescription>Annunci progettati per sembrare contenuti o elementi dell'interfaccia</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Risultati della ricerca: "convertire pdf in word"</h3>

            <div className="space-y-6">
              {/* Annuncio mascherato da risultato */}
              <div className="border rounded-lg p-4 relative">
                <div className="absolute top-2 right-2 text-xs text-gray-500 px-1 border border-gray-300 rounded">
                  Annuncio
                </div>
                <h4 className="text-lg font-medium text-blue-600">
                  Converti PDF in Word - Conversione Facile e Gratuita
                </h4>
                <p className="text-sm text-green-600 mb-1">www.convertitore-premium.it/pdf-word</p>
                <p className="text-sm mb-3">
                  Converti i tuoi file PDF in Word in pochi secondi. Nessuna registrazione richiesta.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => setShowTooltip(true)}>
                    <Download className="h-4 w-4 mr-1" /> Scarica Gratis
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-1" /> Visita Sito
                  </Button>
                </div>

                {showTooltip && (
                  <div className="mt-3 p-2 bg-yellow-100 text-yellow-800 text-sm rounded-md">
                    Nota: Questo pulsante in realtà scaricherebbe un software potenzialmente indesiderato, non il file
                    convertito.
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-2 h-6 text-xs"
                      onClick={() => setShowTooltip(false)}
                    >
                      Chiudi
                    </Button>
                  </div>
                )}
              </div>

              {/* Risultati organici */}
              <div className="p-4">
                <h4 className="text-lg font-medium text-blue-600">Come convertire PDF in Word - Guida passo passo</h4>
                <p className="text-sm text-green-600 mb-1">www.guidetecniche.it/convertire-pdf</p>
                <p className="text-sm">
                  Scopri i migliori metodi per convertire i tuoi documenti PDF in formato Word modificabile...
                </p>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-medium text-blue-600">Convertitore PDF in Word Online Gratuito</h4>
                <p className="text-sm text-green-600 mb-1">www.strumenti-online.it/convertitore</p>
                <p className="text-sm">
                  Usa il nostro strumento online per convertire i tuoi file PDF in documenti Word...
                </p>
              </div>

              {/* Pulsanti download mascherati */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border rounded-lg p-4 text-center relative">
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-0.5 rounded-bl">
                    GRATUITO
                  </div>
                  <h5 className="font-medium mb-2">Download Rapido</h5>
                  <Button className="w-full">Download</Button>
                  <p className="text-xs text-gray-500 mt-2">Sponsorizzato</p>
                </div>

                <div className="border rounded-lg p-4 text-center relative">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-bl">
                    CONSIGLIATO
                  </div>
                  <h5 className="font-medium mb-2">Download Sicuro</h5>
                  <Button className="w-full">Download</Button>
                  <p className="text-xs text-gray-500 mt-2">Sponsorizzato</p>
                </div>

                <div className="border rounded-lg p-4 text-center">
                  <h5 className="font-medium mb-2">Download Standard</h5>
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Sponsorizzato</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Spiegazione del Dark Pattern
            </h4>
            <p className="text-sm mt-1">
              Le "Pubblicità Mascherate" sono annunci progettati per sembrare contenuti regolari o elementi
              dell'interfaccia. Questo pattern sfrutta la confusione dell'utente per aumentare i click sugli annunci.
              Esempi comuni includono:
            </p>
            <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
              <li>Annunci che sembrano risultati di ricerca organici, con etichette "Annuncio" poco visibili</li>
              <li>Pulsanti di download multipli dove quelli più evidenti sono in realtà annunci</li>
              <li>Contenuti sponsorizzati che sembrano articoli regolari</li>
              <li>Finestre pop-up che imitano notifiche di sistema</li>
            </ul>
            <p className="text-sm mt-2">
              Questo pattern viola il principio di trasparenza e inganna deliberatamente gli utenti, portandoli a
              interagire con contenuti pubblicitari pensando che siano funzionalità legittime.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

