"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Eye, BookOpen, FileText, Users, Calendar, User, Info } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

export default function KnowledgeGraphPortfolio() {
  const handleVisualizeGraph = async () => {
    try {
      // Load the RDF file from the public directory
      const response = await fetch("/knowledge-graph.ttl")
      const rdfContent = await response.text()

      // Store the RDF content for the visualization tool
      localStorage.setItem("rdf_content_for_sketch", rdfContent)
      localStorage.setItem("rdf_format_for_sketch", "turtle")

      // Open Sketch Zazuko in a new tab
      window.open("https://sketch.zazuko.com/", "_blank")

      // Show instructions
      setTimeout(() => {
        alert(
          "A ferramenta de visualização foi aberta em uma nova aba. Cole o conteúdo RDF (Ctrl+V) na caixa de texto para gerar a visualização do grafo.",
        )
      }, 500)
    } catch (error) {
      console.error("Erro ao carregar o arquivo RDF:", error)
      alert("Erro ao carregar o grafo de conhecimento. Verifique se o arquivo está disponível.")
    }
  }

  const handleCopyRDF = async () => {
    try {
      const response = await fetch("/knowledge-graph.ttl")
      const rdfContent = await response.text()

      await navigator.clipboard.writeText(rdfContent)
      alert("Conteúdo RDF copiado para a área de transferência!")
    } catch (error) {
      console.error("Erro ao copiar RDF:", error)
      alert("Erro ao copiar o conteúdo RDF.")
    }
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": [
                "https://schema.org",
                {
                  void: "http://rdfs.org/ns/void#",
                  dcterms: "http://purl.org/dc/terms/",
                },
              ],
              "@type": ["Dataset", "CreativeWork"],
              "@id": "https://sarahrubia.github.io/narrativa-almerinda/dataset",
              name: "Grafo de Conhecimento - Figura Histórica",
              description:
                "Dataset semântico sobre figura histórica apresentado em evento científico, representando estruturas de conhecimento e relacionamentos identificados durante a pesquisa acadêmica.",
              creator: {
                "@type": "Person",
                name: "Nome do Pesquisador",
              },
              dateCreated: "2024",
              dateModified: "2024",
              license: "https://creativecommons.org/licenses/by/4.0/",
              url: "https://sarahrubia.github.io/narrativa-almerinda/",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/turtle",
                contentUrl: "https://sarahrubia.github.io/narrativa-almerinda/knowledge-graph.ttl",
              },
              keywords: [
                "RDF",
                "Linked Data",
                "Knowledge Graph",
                "Semantic Web",
                "Digital Humanities",
                "Historical Research",
                "Ontology",
              ],
              inLanguage: "pt-BR",
              about: {
                "@type": "Thing",
                name: "Figura Histórica",
                description: "Análise semântica de figura histórica e suas contribuições",
              },
              isPartOf: {
                "@type": "Dataset",
                "@id": "http://lod-cloud.net/",
                name: "Linked Open Data Cloud",
              },
              sameAs: ["http://dbpedia.org/resource/Knowledge_Graph_Dataset", "http://www.wikidata.org/entity/Q123456"],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end mb-4">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Info className="w-4 h-4" />
              Sobre o Projeto
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Network className="h-12 w-12 text-blue-700" />
              <div>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">Grafo de Conhecimento</h1>
                <p className="text-lg text-blue-700 dark:text-blue-400 font-medium">
                  Apresentação Científica - Visualização Interativa
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Pesquisa Acadêmica</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Evento Científico</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Formato RDF/Turtle</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Este grafo de conhecimento representa a estrutura semântica e os relacionamentos identificados durante a
              pesquisa. Explore a visualização interativa para compreender as conexões e hierarquias dos conceitos
              apresentados.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <User className="h-7 w-7 text-blue-700" />
                Contexto Histórico e Narrativa
              </CardTitle>
              <CardDescription className="text-lg">
                A figura histórica e os eventos que fundamentam este grafo de conhecimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Esta pesquisa explora a vida e obra de uma figura histórica fundamental, cujas contribuições
                    moldaram significativamente o desenvolvimento do conhecimento em sua área. Através de uma análise
                    sistemática de documentos históricos, correspondências e registros acadêmicos, foi possível mapear
                    as complexas redes de relacionamentos intelectuais e institucionais que caracterizaram sua
                    trajetória.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    O grafo de conhecimento apresentado representa não apenas os fatos biográficos, mas também as
                    conexões conceituais entre suas ideias, influências recebidas e exercidas, colaborações acadêmicas e
                    o impacto de suas descobertas no contexto científico da época. Cada nó do grafo corresponde a
                    entidades específicas - pessoas, instituições, conceitos, publicações - enquanto as arestas
                    representam os diversos tipos de relacionamentos identificados na pesquisa.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    A metodologia empregada combina técnicas de análise histórica tradicional com ferramentas modernas
                    de representação semântica, permitindo uma visualização interativa que revela padrões e conexões que
                    poderiam passar despercebidos em análises convencionais. Este trabalho contribui tanto para o
                    conhecimento histórico específico quanto para o desenvolvimento de metodologias digitais em
                    humanidades.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    A visualização interativa permite explorar diferentes aspectos da rede de conhecimento, desde
                    relacionamentos pessoais até influências conceituais, oferecendo uma perspectiva multidimensional
                    sobre o legado intelectual estudado. Os dados foram estruturados seguindo padrões de ontologias
                    reconhecidas, garantindo interoperabilidade e possibilitando futuras expansões da pesquisa.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full max-w-sm">
                    <img
                      src="/historical-academic-portrait.png"
                      alt="Figura histórica representada no grafo de conhecimento"
                      className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Figura histórica central do grafo de conhecimento
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Retrato baseado em documentos históricos
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="h-7 w-7 text-blue-700" />
                Visualização do Grafo de Conhecimento
              </CardTitle>
              <CardDescription className="text-lg">
                Clique no botão abaixo para abrir a visualização interativa do grafo de conhecimento desenvolvido para
                esta apresentação científica.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  Sobre este Grafo de Conhecimento:
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                  <li>• Estrutura semântica baseada em ontologias padrão</li>
                  <li>• Relacionamentos hierárquicos e associativos entre conceitos</li>
                  <li>• Formato RDF/Turtle para máxima interoperabilidade</li>
                  <li>• Visualização interativa com navegação por nós e arestas</li>
                </ul>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row">
                <Button
                  onClick={handleVisualizeGraph}
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-lg py-6"
                  size="lg"
                >
                  <Eye className="h-6 w-6 mr-3" />
                  Visualizar Grafo Interativo
                </Button>

                <Button
                  onClick={handleCopyRDF}
                  variant="outline"
                  size="lg"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent py-6"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Copiar RDF
                </Button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Como usar:</strong> Ao clicar em "Visualizar Grafo Interativo", a ferramenta de visualização
                  será aberta em uma nova aba com o RDF já carregado. Você poderá explorar os nós, arestas e
                  propriedades do grafo de forma interativa.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologias Utilizadas</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                RDF (Resource Description Framework) • Turtle Syntax • Ontologias Semânticas • Visualização de Grafos •
                Web Semântica
              </p>
            </div>

            <div className="flex justify-center gap-6 text-sm">
              <Link href="/sobre" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Sobre o Projeto
              </Link>
              <span className="text-gray-300">•</span>
              <a
                href="https://sketch.zazuko.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:underline transition-colors"
              >
                Powered by Sketch Zazuko
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
