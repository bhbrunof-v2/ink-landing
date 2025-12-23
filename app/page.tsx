import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Crie landing pages de vendas com autonomia
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl">
            Um projeto base para Product Designers que querem sair do Figma e
            colocar produtos no ar com controle total.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button size="lg">Começar agora</Button>
            <Button size="lg" variant="outline">
              Ver como funciona
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Rápido de montar</CardTitle>
            </CardHeader>
            <CardContent>
              Estrutura pronta para você criar e adaptar landing pages em
              minutos.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual consistente</CardTitle>
            </CardHeader>
            <CardContent>
              Tailwind e shadcn garantem padrão visual e escalabilidade.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pronto para evoluir</CardTitle>
            </CardHeader>
            <CardContent>
              Base pensada para crescer junto com seus projetos.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Pronto para lançar sua próxima landing?
            </h2>
            <p className="text-muted-foreground">
              Use este projeto como base e comece agora.
            </p>
          </div>

          <Button size="lg">Começar agora</Button>
        </div>
      </section>
    </main>
  )
}
