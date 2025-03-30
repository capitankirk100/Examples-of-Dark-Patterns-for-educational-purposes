"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Info, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Aggiungi il componente di navigazione
import { NavigationMenu } from "@/components/navigation-menu"
import { PageHeader } from "@/components/page-header"

export default function DarkPatternsDemo() {
  const [activeTab, setActiveTab] = useState("confirmshaming")
  const [showPopup, setShowPopup] = useState(false)
  const [showHiddenCosts, setShowHiddenCosts] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [showCancellationDialog, setShowCancellationDialog] = useState(false)
  const [cancellationStep, setCancellationStep] = useState(0)
  const [showInfoDialog, setShowInfoDialog] = useState(false)

  // Modifica il comportamento del popup per renderlo meno invasivo
  useEffect(() => {
    // Mostra il popup solo la prima volta, dopo 3 secondi
    const timer = setTimeout(() => {
      if (!showPopup && !localStorage.getItem("popupShown")) {
        setShowPopup(true)
        localStorage.setItem("popupShown", "true")
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [showPopup])

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Aggiungi il componente NavigationMenu all'inizio del return, subito dopo il div container */}
      <NavigationMenu />

      <PageHeader
        title="Dark Pattern nel Design UI"
        description="Pratiche di design ingannevoli che inducono gli utenti a prendere decisioni non intenzionali"
      />

      <Button
        variant="outline"
        size="sm"
        className="mb-6 flex items-center gap-2 mx-auto"
        onClick={() => setShowInfoDialog(true)}
      >
        <Info className="h-4 w-4" /> Cosa sono i dark pattern?
      </Button>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Modifica la TabsList per renderla più responsive */}
        <TabsList className="flex overflow-x-auto pb-1 mb-4 w-full bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="confirmshaming" className="flex-shrink-0">
            Conferma Colpevolizzante
          </TabsTrigger>
          <TabsTrigger value="hiddencosts" className="flex-shrink-0">
            Costi Nascosti
          </TabsTrigger>
          <TabsTrigger value="forcedcontinuity" className="flex-shrink-0">
            Continuità Forzata
          </TabsTrigger>
          <TabsTrigger value="misdirection" className="flex-shrink-0">
            Distrazione
          </TabsTrigger>
          <TabsTrigger value="trickquestions" className="flex-shrink-0">
            Domande Ingannevoli
          </TabsTrigger>
          <TabsTrigger value="privacyzuckering" className="flex-shrink-0">
            Privacy Zuckering
          </TabsTrigger>
          <TabsTrigger value="baitswitch" className="flex-shrink-0">
            Esca e Scambio
          </TabsTrigger>
          <TabsTrigger value="preselection" className="flex-shrink-0">
            Preselezione
          </TabsTrigger>
        </TabsList>

        {/* Esempio di Conferma Colpevolizzante */}
        <TabsContent value="confirmshaming" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Conferma Colpevolizzante</CardTitle>
              <CardDescription>Far sentire gli utenti in colpa per aver rifiutato qualcosa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Iscriviti alla nostra newsletter!</h3>
                <p className="mb-4">Ricevi gli ultimi aggiornamenti e offerte esclusive.</p>
                <div className="flex gap-2 mb-4">
                  <Input placeholder="Inserisci la tua email" className="max-w-xs" />
                  <Button>Iscriviti</Button>
                </div>
                <Button variant="ghost" className="text-sm text-muted-foreground">
                  No grazie, preferisco perdermi offerte incredibili
                </Button>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  L'opzione di rifiuto utilizza un linguaggio che fa sentire in colpa l'utente per la sua scelta. Questo
                  manipola le emozioni per aumentare i tassi di conversione.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Costi Nascosti */}
        <TabsContent value="hiddencosts" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Costi Nascosti</CardTitle>
              <CardDescription>
                Rivelare costi aggiuntivi solo nelle fasi finali del processo di acquisto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Checkout</h3>
                <div className="flex justify-between mb-2">
                  <span>Prodotto</span>
                  <span>€49,99</span>
                </div>
                {showHiddenCosts && (
                  <>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Commissione di servizio</span>
                      <span>€4,99</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Commissione di convenienza</span>
                      <span>€2,99</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Spese di spedizione</span>
                      <span>€5,99</span>
                    </div>
                  </>
                )}
                <div className="border-t my-2 pt-2 font-bold flex justify-between">
                  <span>Totale</span>
                  <span>{showHiddenCosts ? "€63,96" : "€49,99"}</span>
                </div>
                <Button className="w-full mt-4" onClick={() => setShowHiddenCosts(true)}>
                  {showHiddenCosts ? "Completa Acquisto" : "Procedi al Pagamento"}
                </Button>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  I costi aggiuntivi vengono nascosti fino all'ultimo passaggio del checkout, dopo che l'utente ha già
                  investito tempo nel processo. Questo rende più probabile che l'utente completi l'acquisto nonostante
                  il prezzo più alto.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Continuità Forzata */}
        <TabsContent value="forcedcontinuity" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Continuità Forzata</CardTitle>
              <CardDescription>Rendere difficile la cancellazione di un abbonamento o servizio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                {!subscribed ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inizia la tua prova gratuita oggi!</h3>
                    <p className="mb-4">Nessuna carta di credito richiesta per 7 giorni. Poi solo €9,99/mese.</p>
                    <Button onClick={() => setSubscribed(true)}>Inizia Prova Gratuita</Button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Il Tuo Abbonamento Premium</h3>
                    <p className="mb-4">Attualmente sei sul piano premium (€9,99/mese)</p>
                    <Button variant="outline" onClick={() => setShowCancellationDialog(true)}>
                      Cancella Abbonamento
                    </Button>

                    {showCancellationDialog && (
                      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg max-w-md w-full">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">
                              {cancellationStep === 0 && "Ci dispiace vederti andare"}
                              {cancellationStep === 1 && "Aspetta! Offerta Speciale"}
                              {cancellationStep === 2 && "Sei assolutamente sicuro?"}
                              {cancellationStep === 3 && "Un ultimo passaggio"}
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setShowCancellationDialog(false)
                                setCancellationStep(0)
                              }}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          {cancellationStep === 0 && (
                            <>
                              <p className="mb-4">Prima di andare, dicci perché stai cancellando:</p>
                              <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2">
                                  <Checkbox id="reason1" />
                                  <Label htmlFor="reason1">Troppo costoso</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="reason2" />
                                  <Label htmlFor="reason2">Non lo uso abbastanza</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="reason3" />
                                  <Label htmlFor="reason3">Ho trovato un'alternativa migliore</Label>
                                </div>
                              </div>
                              <Button onClick={() => setCancellationStep(1)}>Continua</Button>
                            </>
                          )}

                          {cancellationStep === 1 && (
                            <>
                              <p className="mb-4">Che ne dici del 50% di sconto per i prossimi 3 mesi?</p>
                              <div className="flex gap-2">
                                <Button variant="outline" onClick={() => setCancellationStep(2)}>
                                  No grazie, continua la cancellazione
                                </Button>
                                <Button
                                  onClick={() => {
                                    setShowCancellationDialog(false)
                                    setCancellationStep(0)
                                  }}
                                >
                                  Accetta Offerta
                                </Button>
                              </div>
                            </>
                          )}

                          {cancellationStep === 2 && (
                            <>
                              <p className="mb-4">Perderai l'accesso a tutte le funzionalità premium. Sei sicuro?</p>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    setShowCancellationDialog(false)
                                    setCancellationStep(0)
                                  }}
                                >
                                  Mantieni il mio abbonamento
                                </Button>
                                <Button onClick={() => setCancellationStep(3)}>Sì, cancella</Button>
                              </div>
                            </>
                          )}

                          {cancellationStep === 3 && (
                            <>
                              <p className="mb-4">
                                Chiama il nostro servizio clienti al numero 800-123-456 per completare la cancellazione.
                              </p>
                              <Button
                                onClick={() => {
                                  setShowCancellationDialog(false)
                                  setCancellationStep(0)
                                  setSubscribed(false)
                                }}
                              >
                                Chiamerò più tardi
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  Mentre l'iscrizione è semplice, la cancellazione richiede più passaggi, schermate di conferma, offerte
                  speciali e alla fine una telefonata. Questa frizione deliberata è progettata per scoraggiare gli
                  utenti dal cancellare il loro abbonamento.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Distrazione */}
        <TabsContent value="misdirection" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Distrazione</CardTitle>
              <CardDescription>Design visivo che distoglie l'attenzione dalle informazioni importanti</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Scegli il Tuo Piano</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Piano Base</h4>
                    <p className="text-2xl font-bold mb-2">
                      €9,99<span className="text-sm font-normal">/mese</span>
                    </p>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>✓ Funzionalità di base</li>
                      <li>✓ Supporto via email</li>
                      <li>✓ 5GB di spazio</li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Seleziona Base
                    </Button>
                  </div>

                  <div className="border-2 border-blue-500 p-4 rounded-lg bg-blue-50 shadow-md relative">
                    <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      MIGLIOR VALORE
                    </div>
                    <h4 className="font-medium mb-2">Piano Premium</h4>
                    <p className="text-2xl font-bold mb-2">
                      €19,99<span className="text-sm font-normal">/mese</span>
                    </p>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>✓ Tutte le funzionalità base</li>
                      <li>✓ Supporto prioritario</li>
                      <li>✓ 50GB di spazio</li>
                      <li>✓ Analisi avanzate</li>
                    </ul>
                    <Button className="w-full">Seleziona Premium</Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Fatturato annualmente a €239,88</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  Il piano premium è visivamente evidenziato per attirare l'attenzione, mentre le informazioni sulla
                  fatturazione annuale sono in piccolo. Il badge "miglior valore" crea FOMO (paura di perdersi
                  qualcosa), spingendo gli utenti verso l'opzione più costosa.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Domande Ingannevoli */}
        <TabsContent value="trickquestions" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Domande Ingannevoli</CardTitle>
              <CardDescription>Formulazioni confuse per manipolare le scelte degli utenti</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Preferenze di Comunicazione</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Checkbox id="marketing" defaultChecked />
                    <div>
                      <Label htmlFor="marketing" className="font-medium">
                        Comunicazioni di Marketing
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Deseleziona questa casella se non vuoi non ricevere le nostre offerte e promozioni esclusive.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="partners" defaultChecked />
                    <div>
                      <Label htmlFor="partners" className="font-medium">
                        Offerte dei Partner
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Non desidero rinunciare a ricevere offerte dai nostri partner fidati.
                      </p>
                    </div>
                  </div>

                  <Button className="mt-2">Salva Preferenze</Button>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  La formulazione utilizza doppie negazioni e linguaggio confuso per ingannare gli utenti e farli
                  acconsentire alle comunicazioni di marketing. La maggior parte degli utenti sarà confusa su cosa
                  significhi effettivamente selezionare o deselezionare le caselle.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Privacy Zuckering */}
        <TabsContent value="privacyzuckering" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Privacy Zuckering</CardTitle>
              <CardDescription>Ingannare gli utenti per fargli condividere più informazioni personali</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Completa il tuo profilo</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Numero di telefono</Label>
                    <Input id="phone" placeholder="Inserisci il tuo numero" className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Per proteggere il tuo account e ricevere avvisi di sicurezza
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="address">Indirizzo</Label>
                    <Input id="address" placeholder="Inserisci il tuo indirizzo" className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Per migliorare i suggerimenti locali</p>
                  </div>

                  <div>
                    <Label htmlFor="contacts">Sincronizza contatti</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Checkbox id="contacts" defaultChecked />
                      <Label htmlFor="contacts" className="text-sm">
                        Aiutaci a trovare persone che conosci
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 pl-6">
                      Ci aiuta a personalizzare la tua esperienza e a connettere amici
                    </p>
                  </div>

                  <Button className="w-full mt-2">Salva e continua</Button>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  Questo pattern, chiamato "Privacy Zuckering" (dal fondatore di Facebook), induce gli utenti a
                  condividere più dati personali di quanto intendano. Le richieste sono presentate come funzionalità di
                  sicurezza o miglioramenti dell'esperienza, ma il vero scopo è raccogliere più dati per profilazione e
                  marketing.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Esca e Scambio */}
        <TabsContent value="baitswitch" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Esca e Scambio</CardTitle>
              <CardDescription>
                Pubblicizzare un'offerta ma poi sostituirla con un'alternativa meno vantaggiosa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="mb-6 p-3 bg-red-100 border border-red-200 rounded-lg text-sm">
                  <p className="font-semibold text-red-700">Ci dispiace!</p>
                  <p className="text-red-600">
                    L'offerta smartphone a €199 non è più disponibile. Abbiamo selezionato alternative simili per te.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">Alternative disponibili</h3>
                <div className="grid gap-4">
                  <div className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Smartphone Pro X</h4>
                        <p className="text-sm text-muted-foreground">Simile al modello che cercavi</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">€349</p>
                        <p className="text-xs text-muted-foreground">Disponibile ora</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Aggiungi al carrello</Button>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Smartphone Ultra Y</h4>
                        <p className="text-sm text-muted-foreground">Versione premium</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">€499</p>
                        <p className="text-xs text-muted-foreground">Disponibile ora</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Aggiungi al carrello</Button>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  Il pattern "Esca e Scambio" attira i clienti con un'offerta allettante (l'esca), ma quando tentano di
                  acquistare, scoprono che l'offerta non è disponibile e vengono indirizzati verso alternative più
                  costose (lo scambio). Questa tattica sfrutta l'investimento psicologico già fatto dall'utente nel
                  processo di acquisto.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Esempio di Preselezione */}
        <TabsContent value="preselection" className="mt-4">
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Preselezione</CardTitle>
              <CardDescription>Opzioni preselezionate che favoriscono l'azienda, non l'utente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Completa il tuo ordine</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Checkbox id="express" defaultChecked />
                    <div>
                      <Label htmlFor="express" className="font-medium">
                        Spedizione Express
                      </Label>
                      <p className="text-sm text-muted-foreground">Ricevi il tuo ordine in 1-2 giorni lavorativi</p>
                      <p className="text-sm font-semibold">+ €9,99</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="warranty" defaultChecked />
                    <div>
                      <Label htmlFor="warranty" className="font-medium">
                        Garanzia Estesa
                      </Label>
                      <p className="text-sm text-muted-foreground">Protezione aggiuntiva per 2 anni</p>
                      <p className="text-sm font-semibold">+ €24,99</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <div>
                      <Label htmlFor="newsletter" className="font-medium">
                        Iscriviti alla newsletter
                      </Label>
                      <p className="text-sm text-muted-foreground">Ricevi offerte esclusive e aggiornamenti</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotale prodotto</span>
                    <span>€129,99</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Spedizione Express</span>
                    <span>€9,99</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Garanzia Estesa</span>
                    <span>€24,99</span>
                  </div>
                  <div className="border-t my-2 pt-2 font-bold flex justify-between">
                    <span>Totale</span>
                    <span>€164,97</span>
                  </div>
                </div>

                <Button className="w-full mt-4">Procedi al pagamento</Button>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  Spiegazione del Dark Pattern
                </h4>
                <p className="text-sm mt-1">
                  La "Preselezione" sfrutta l'inerzia degli utenti preselezionando opzioni che generano più profitto per
                  l'azienda. Molti utenti non modificheranno queste impostazioni per fretta o disattenzione, accettando
                  così servizi aggiuntivi o condizioni che non avrebbero scelto attivamente. Questo pattern viola il
                  principio del consenso informato.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Esempio di Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPopup(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <h3 className="text-xl font-bold mb-2">🎉 Offerta Speciale!</h3>
            <p className="mb-4">Iscriviti ora e ottieni il 50% di sconto sul primo mese!</p>
            <div className="grid gap-2">
              <Button onClick={() => setShowPopup(false)}>Approfitta dell'Offerta</Button>
              <Button variant="ghost" className="text-xs text-muted-foreground" onClick={() => setShowPopup(false)}>
                No grazie, non mi piace risparmiare
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Finestra Informativa */}
      <Dialog open={showInfoDialog} onOpenChange={setShowInfoDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Cosa sono i Dark Pattern?</DialogTitle>
            <DialogDescription>
              I dark pattern sono trucchi ingannevoli di UX/UI utilizzati da siti web e app per manipolare gli utenti e
              indurli a fare cose che altrimenti non farebbero.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              I dark pattern sfruttano la psicologia umana e i bias cognitivi per avvantaggiare l'azienda a spese
              dell'utente. Sono chiamati "dark" (oscuri) perché spesso sono nascosti o mascherati come funzionalità
              utili.
            </p>
            <p>I tipi più comuni di dark pattern includono:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Conferma Colpevolizzante:</strong> Far sentire in colpa gli utenti che rifiutano un'offerta
              </li>
              <li>
                <strong>Costi Nascosti:</strong> Rivelare costi aggiuntivi solo nelle fasi finali del checkout
              </li>
              <li>
                <strong>Continuità Forzata:</strong> Rendere difficile la cancellazione
              </li>
              <li>
                <strong>Distrazione:</strong> Distogliere l'attenzione dalle informazioni importanti
              </li>
              <li>
                <strong>Domande Ingannevoli:</strong> Usare un linguaggio confuso per manipolare le scelte
              </li>
              <li>
                <strong>Motel Scarafaggio:</strong> Facile entrare, difficile uscire
              </li>
              <li>
                <strong>Privacy Zuckering:</strong> Ingannare gli utenti per fargli condividere più informazioni del
                previsto
              </li>
            </ul>
            <p>
              I dark pattern sono sempre più regolamentati in alcune giurisdizioni, poiché sono considerati pratiche
              commerciali ingannevoli.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

