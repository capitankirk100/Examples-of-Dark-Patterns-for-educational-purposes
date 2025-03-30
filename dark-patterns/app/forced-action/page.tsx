"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function ForcedActionPage() {
  const [step, setStep] = useState(1)
  const [showError, setShowError] = useState(false)
  const [dataConsent, setDataConsent] = useState(false)

  const handleNext = () => {
    if (step === 2 && !dataConsent) {
      setShowError(true)
      return
    }

    setShowError(false)
    setStep((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Azione Forzata"
        description="Costringere gli utenti a compiere azioni non desiderate per procedere"
      />

      <Card>
        <CardHeader>
          <CardTitle>Azione Forzata</CardTitle>
          <CardDescription>
            Obbligare gli utenti a compiere azioni non correlate per accedere a una funzionalità
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Crea il tuo account</h3>
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-blue-500" : "bg-gray-300"}`}></span>
                <div className={`w-6 h-0.5 ${step >= 2 ? "bg-blue-500" : "bg-gray-300"}`}></div>
                <span className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-blue-500" : "bg-gray-300"}`}></span>
                <div className={`w-6 h-0.5 ${step >= 3 ? "bg-blue-500" : "bg-gray-300"}`}></div>
                <span className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-blue-500" : "bg-gray-300"}`}></span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="La tua email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Crea una password" className="mt-1" />
                </div>
                <Button onClick={handleNext} className="w-full mt-2">
                  Continua
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-medium">Consensi obbligatori</h4>

                <div className="flex items-start gap-2">
                  <Checkbox id="terms" defaultChecked />
                  <div>
                    <Label htmlFor="terms" className="text-sm">
                      Accetto i Termini di Servizio e la Privacy Policy
                    </Label>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="data"
                    checked={dataConsent}
                    onCheckedChange={(checked) => setDataConsent(checked === true)}
                  />
                  <div>
                    <Label htmlFor="data" className="text-sm">
                      Acconsento alla condivisione dei miei dati con partner di terze parti per scopi di marketing
                    </Label>
                    {showError && !dataConsent && (
                      <p className="text-red-500 text-xs mt-1">Devi acconsentire per continuare</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <div>
                    <Label htmlFor="newsletter" className="text-sm">
                      Desidero ricevere la newsletter settimanale
                    </Label>
                  </div>
                </div>

                <Button onClick={handleNext} className="w-full mt-2">
                  Continua
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-medium text-lg">Account creato con successo!</h4>
                <p className="text-sm text-muted-foreground">
                  Grazie per aver creato il tuo account. Ora puoi accedere a tutte le funzionalità.
                </p>
                <Button onClick={() => setStep(1)} className="mt-2">
                  Torna all'inizio
                </Button>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Spiegazione del Dark Pattern
            </h4>
            <p className="text-sm mt-1">
              L'"Azione Forzata" obbliga gli utenti a compiere azioni non desiderate o non correlate per poter accedere
              a una funzionalità o servizio. In questo esempio, l'utente è costretto ad acconsentire alla condivisione
              dei propri dati con terze parti per poter completare la registrazione, anche se questo consenso non
              dovrebbe essere obbligatorio secondo le normative sulla privacy (come il GDPR).
            </p>
            <p className="text-sm mt-2">
              Questo pattern viola il principio del consenso libero e informato, poiché l'utente non ha una scelta
              reale: o acconsente alla condivisione dei dati o non può utilizzare il servizio. Inoltre, spesso queste
              richieste sono nascoste in mezzo ad altri consensi legittimamente obbligatori, come l'accettazione dei
              termini di servizio.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

