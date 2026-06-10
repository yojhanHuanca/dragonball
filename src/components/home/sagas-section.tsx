import { SectionHeading } from "@/components/home/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fighters, sagas } from "@/data/home"

export function SagasSection() {
  return (
    <section id="sagas" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sagas y ranking"
          title="Informacion visual, compacta y accionable."
          description="Tabs para alternar entre arcos narrativos y guerreros sin cambiar de contexto."
        />

        <Tabs defaultValue="sagas" className="mx-auto max-w-5xl">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="sagas">Sagas</TabsTrigger>
              <TabsTrigger value="fighters">Guerreros</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="sagas">
            <div className="grid gap-4 md:grid-cols-3">
              {sagas.map((saga) => (
                <Card key={saga.name} className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${saga.tone}`} />
                  <CardHeader>
                    <Badge variant="outline">{saga.status}</Badge>
                    <CardTitle className="mt-4">{saga.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progreso narrativo</span>
                      <span className="font-bold">{saga.progress}%</span>
                    </div>
                    <Progress value={saga.progress} className="mt-3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="fighters" id="ranking">
            <div className="grid gap-4 md:grid-cols-2">
              {fighters.map((fighter) => (
                <Card key={fighter.name}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="grid size-12 place-items-center rounded-lg bg-orange-500 text-sm font-black text-white">
                      {fighter.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-black">{fighter.name}</h3>
                        <span className="text-sm font-bold">{fighter.power}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{fighter.role}</p>
                      <Progress value={fighter.power} className="mt-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
