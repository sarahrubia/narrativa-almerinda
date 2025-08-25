import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, FileText, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header com navegação */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Grafo de Conhecimento
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Sobre o Projeto</h1>
          <p className="text-slate-600 text-lg">Informações sobre a pesquisa, metodologia e autoria.</p>
        </div>

        <div className="space-y-8">
          {/* Seção da Autora */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="w-6 h-6 text-blue-600" />
                Sobre a Autora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src="/placeholder-4r6oq.png"
                    alt="Foto da autora"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Dra. [Nome da Autora]</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Doutora em História</Badge>
                      <Badge variant="secondary">Pesquisadora</Badge>
                      <Badge variant="secondary">Web Semântica</Badge>
                    </div>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <p>
                      Doutora em História pela [Universidade], com especialização em história moderna e metodologias
                      digitais aplicadas à pesquisa histórica. Atua como pesquisadora na intersecção entre humanidades
                      digitais e tecnologias semânticas.
                    </p>
                    <p>
                      Desenvolve pesquisas sobre a aplicação de grafos de conhecimento e Linked Data para representação
                      e análise de dados históricos, contribuindo para novas metodologias de visualização e
                      interpretação de fontes primárias.
                    </p>
                    <p>
                      Membro do grupo de pesquisa [Nome do Grupo] e colaboradora em projetos internacionais de
                      humanidades digitais, com foco na preservação e democratização do conhecimento histórico através
                      de tecnologias abertas.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resumo do Trabalho */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="w-6 h-6 text-blue-600" />
                Resumo do Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Objetivo:</strong> Este trabalho apresenta a construção e visualização de um grafo de
                  conhecimento representando as relações históricas, sociais e intelectuais de [Figura Histórica],
                  utilizando tecnologias de Web Semântica e padrões de Linked Data para criar uma representação
                  estruturada e interconectada de dados históricos.
                </p>
                <p>
                  <strong>Metodologia:</strong> A pesquisa empregou uma abordagem interdisciplinar combinando métodos
                  tradicionais de pesquisa histórica com técnicas de modelagem semântica. Os dados foram estruturados
                  utilizando vocabulários padrão como FOAF, Dublin Core e Schema.org, seguindo os princípios de Linked
                  Data para garantir interoperabilidade e reutilização.
                </p>
                <p>
                  <strong>Resultados:</strong> O grafo de conhecimento resultante conecta informações biográficas,
                  contexto histórico, relações sociais e produção intelectual, oferecendo uma nova perspectiva sobre a
                  figura estudada. A visualização interativa permite exploração dinâmica das conexões, revelando padrões
                  e relações antes não evidentes na documentação tradicional.
                </p>
                <p>
                  <strong>Contribuições:</strong> Este projeto demonstra o potencial das tecnologias semânticas para
                  enriquecer a pesquisa histórica, oferecendo metodologias replicáveis para outros estudos e
                  contribuindo para a construção de uma rede global de conhecimento histórico interconectado.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referência ABNT */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Referência Bibliográfica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-slate-800 font-mono text-sm leading-relaxed">
                  [SOBRENOME], [Nome da Autora].{" "}
                  <strong>
                    Grafo de Conhecimento de [Figura Histórica]: uma abordagem de Web Semântica para representação de
                    dados históricos
                  </strong>
                  . In: [NOME DO EVENTO/CONFERÊNCIA], [número da edição]., [ano], [Local].
                  <strong>Anais</strong> [...]. [Local]: [Editora], [ano]. p. [páginas]. Disponível em:
                  https://[seu-usuario].github.io/[seu-repositorio]. Acesso em:{" "}
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                  .
                </p>
              </div>
              <div className="mt-4 text-sm text-slate-600">
                <p>
                  <strong>Nota:</strong> Substitua os campos entre colchetes pelas informações específicas da sua
                  pesquisa.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Informações Técnicas */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Informações Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Tecnologias Utilizadas</h4>
                  <ul className="space-y-1">
                    <li>• RDF/Turtle para modelagem semântica</li>
                    <li>• Vocabulários FOAF, Dublin Core, Schema.org</li>
                    <li>• Linked Data principles</li>
                    <li>• Sketch Zazuko para visualização</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Padrões e Normas</h4>
                  <ul className="space-y-1">
                    <li>• W3C RDF 1.1 Specification</li>
                    <li>• Linked Data best practices</li>
                    <li>• FAIR data principles</li>
                    <li>• Open Access guidelines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} - Projeto de Pesquisa em Humanidades Digitais</p>
          <p className="mt-1">
            Visualização powered by{" "}
            <a
              href="https://sketch.zazuko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sketch Zazuko
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
