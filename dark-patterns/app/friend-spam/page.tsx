"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Check, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Aggiungi i componenti di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function FriendSpamPage() {
  const [step, setStep] = useState(1)
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)

  const contacts = [
    { id: "1", name: "Marco Rossi", email: "marco.rossi@email.it" },
    { id: "2", name: "Giulia Bianchi", email: "giulia.b@email.it" },
    { id: "3", name: "Alessandro Verdi", email: "ale.verdi@email.it" },
    { id: "4", name: "Francesca Neri", email: "f.neri@email.it" },
    { id: "5", name: "Luca Marino", email: "l.marino@email.it" },
  ]

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked)
    if (checked) {
      setSelectedContacts(contacts.map((c) => c.id))
    } else {
      setSelectedContacts([])
    }
  }

  const handleSelectContact = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedContacts((prev) => [...prev, id])
    } else {
      setSelectedContacts((prev) => prev.filter((contactId) => contactId !== id))
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <NavigationMenu />
      <PageHeader
        title="Friend Spam"
        description="Ingannare gli utenti per accedere ai loro contatti e inviare messaggi"
      />

      <Card>
        <CardHeader>
          <CardTitle>Friend Spam</CardTitle>
          <CardDescription>
            Indurre gli utenti a inviare inviti ai propri contatti, spesso con messaggi ingannevoli
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Ottieni 50% di sconto!</h3>
                <p className="mb-4">Invita i tuoi amici e ricevi uno sconto del 50% sul tuo prossimo acquisto.</p>

                <div>
                  <Label htmlFor="email">Il tuo indirizzo email</Label>
                  <Input id="email" type="email" placeholder="La tua email" className="mt-1" />
                </div>

                <Button onClick={() => setStep(2)} className="w-full mt-4">
                  Ottieni il tuo sconto
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Trova i tuoi amici</h3>
                <p className="mb-4 text-sm">
                  Per offrirti un'esperienza migliore, aiutaci a trovare i tuoi amici che già usano il nostro servizio.
                </p>

                <div className="p-3 border rounded-lg bg-white">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="selectAll"
                        checked={selectAll}
                        onCheckedChange={(checked) => handleSelectAll(checked === true)}
                      />
                      <Label htmlFor="selectAll" className="font-medium">
                        Seleziona tutti
                      </Label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {selectedContacts.length} di {contacts.length} selezionati
                    </span>
                  </div>

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id={`contact-${contact.id}`}
                            checked={selectedContacts.includes(contact.id)}
                            onCheckedChange={(checked) => handleSelectContact(contact.id, checked === true)}
                          />
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="h-4 w-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{contact.name}</p>
                              <p className="text-xs text-muted-foreground">{contact.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mt-2">
                  <p>Cliccando su "Invita amici", accetti di inviare inviti a nome tuo ai contatti selezionati.</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Indietro
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1">
                    Invita amici
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Inviti inviati con successo!</h3>
                <p className="mb-4">Abbiamo inviato inviti a {selectedContacts.length} dei tuoi contatti.</p>
                <p className="text-sm font-medium text-green-600">Il tuo codice sconto del 50%: FRIEND50</p>
                <Button onClick={() => setStep(1)} className="mt-4">
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
              Il "Friend Spam" è un pattern che induce gli utenti a concedere l'accesso ai propri contatti e a inviare
              inviti o messaggi promozionali, spesso con incentivi come sconti o funzionalità aggiuntive. Questo pattern
              è problematico per diversi motivi:
            </p>
            <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
              <li>Sfrutta la fiducia tra amici e contatti per diffondere un servizio</li>
              <li>Spesso non è chiaro che verranno inviati messaggi a nome dell'utente</li>
              <li>
                I messaggi inviati possono contenere linguaggio ingannevole che fa sembrare che l'utente raccomandi
                attivamente il servizio
              </li>
              <li>L'accesso ai contatti può essere utilizzato per scopi di raccolta dati oltre all'invio di inviti</li>
            </ul>
            <p className="text-sm mt-2">
              Questo pattern viola il principio della trasparenza e del consenso informato, poiché gli utenti spesso non
              comprendono pienamente a cosa stanno acconsentendo quando concedono l'accesso ai propri contatti.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

