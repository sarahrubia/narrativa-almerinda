"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Eye, BookOpen, FileText, GraduationCap, User, Info } from "lucide-react"
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
          "A ferramenta de visualização foi aberta em uma nova aba. Se o conteúdo RDF não for carregado, cole o conteúdo RDF (Ctrl+V) na caixa de texto para gerar a visualização do grafo.",
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
              "@id": "https://sarahrubia.github.io/narrativa-almerinda/knowledge-graph.ttl",
              name: "Grafo de Conhecimento da Trajetória de Almerinda Farias Gama",
              description:
                "Dataset semântico sobre figura histórica, representando estruturas de conhecimento e relacionamentos identificados durante a pesquisa acadêmica.",
              creator: {
                "@type": "Person",
                name: "Sarah Rúbia de Oliveira Santos",
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
                "Information Science",
                "Digital Humanities",
                "Ontology",
              ],
              inLanguage: "pt-BR",
              about: {
                "@type": "Thing",
                name: "Almerinda Farias Gama",
                description: "Análise semântica da trajetória de Almerinda Farias Gama e suas contribuições",
              },
              isPartOf: {
                "@type": "Dataset",
                "@id": "http://lod-cloud.net/",
                name: "Linked Open Data Cloud",
              },
              // sameAs: ["http://dbpedia.org/resource/Knowledge_Graph_Dataset", "http://www.wikidata.org/entity/Q123456"],
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
              {/* <Network className="h-12 w-12 text-blue-700" /> */}
              <div>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">Trajetória de Almerinda Farias Gama</h1>
                {/* <p className="text-lg text-blue-700 dark:text-blue-400 font-medium">
                  Visualização Interativa
                </p> */}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Tese de Doutorado</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4" />
                <span>Grafo de Conhecimento</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Formato RDF/Turtle</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Este grafo de conhecimento representa a estrutura semântica e os relacionamentos identificados durante a pesquisa sobre a trajetória de Almerinda Farias Gama. Explore a visualização interativa para compreender as conexões e hierarquias dos conceitos apresentados.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <User className="h-7 w-7 text-blue-700" />
                Contexto Histórico e Narrativa
              </CardTitle>
              <CardDescription className="text-lg">
                Almerinda Farias Gama e os eventos que fundamentam este grafo de conhecimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    A trajetória política de luta de Almerinda Farias Gama – advogada, sindicalista e uma das primeiras mulheres negras a ocupar espaços institucionais de destaque na política brasileira – intensificou-se estrategicamente em 1929, quando migrou de Alagoas para o Rio de Janeiro. Em um Brasil recém-emergido do sistema escravista, onde os espaços de poder político eram estruturalmente restritos através de barreiras interseccionais de gênero e raça, sua filiação à Federação Brasileira pelo Progresso Feminino (FBPM), liderada por Bertha Lutz, constituiu um ato de relevância política excepcional. Neste contexto, ela não apenas engajou-se na luta pela emancipação feminina, mas introduziu criticamente no movimento majoritariamente branco a perspectiva específica da mulher negra e trabalhadora, conceitualizando o sufrágio como "arma" estratégica fundamental contra as estruturas opressivas do sexismo e do racismo.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Sua atuação política caracterizou-se pela multiplicidade de frentes de ação. Como pioneira do feminismo interseccional, sua participação no II Congresso Internacional Feminista em 1931 transcendeu o papel de congressista convencional, constituindo-se como voz representativa de uma parcela estruturalmente invisibilizada da população feminina brasileira. Paralelamente, sua liderança sindical como primeira presidente do Sindicato dos Datilógrafas e Taquígrafas operou como plataforma institucional para uma luta interseccional articulada, que abrangia simultaneamente a "independência econômica da mulher" e o combate sistemático à desigualdade salarial que historicamente penalizava com maior intensidade as mulheres negras trabalhadoras.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    O momento histórico mais emblemático de seu pioneirismo político materializou-se em 20 de julho de 1933. Indicada como delegada sindical, Almerinda exerceu o voto na escolha da bancada classista para a Assembleia Nacional Constituinte de 1934. Neste ato histórico de significância excepcional, ela constituiu-se como única representante feminina – e, particularmente, uma mulher negra – presente no processo decisório, rompendo simultaneamente barreiras estruturais de gênero e raça através de um único gesto político. Sua candidatura em 1934, embora eleitoralmente não vitoriosa, consolidou definitivamente este legado transformador, reforçando sua posição como figura seminal na historiografia da participação política negra e feminina no Brasil.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full max-w-sm">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/almerinda-farias-gama.jpg`}
                      alt="Retrato de Almerinda Farias Gama, produzido entre 1910 e 1928. A imagem integra o arquivo pessoal de Almerinda que faz parte do acervo histórico da FGV CPDOC."
                      className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Retrato de Almerinda Farias Gama, produzido entre 1910 e 1928.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      A imagem integra o arquivo pessoal de Almerinda que faz parte do acervo histórico da FGV CPDOC.
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
                Clique no botão abaixo para abrir a visualização interativa do grafo de conhecimento desenvolvido nesta pesquisa.
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

          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-center text-gray-800 dark:text-gray-200">
                Apoio Institucional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center flex-inline">
                {/* Logo da Universidade */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ufmg.png`}
                      alt="Logo da Universidade"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  {/* <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">UFMG</p> */}
                </div>

                {/* Logo da ECI */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/eci.png`}
                      alt="Logo da Escola de Ciência da Informação"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  {/* <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">ECI</p> */}
                </div>

                {/* Logo do PPGGOC */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ppggoc.png`}
                      alt="Logo do Programa de Pós-Graduação PPGGOC"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  {/* <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">PPGGOC</p> */}
                </div>

                {/* Logo da Agência de Fomento */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/capes.png`}
                      alt="Logo da Agência de Fomento Capes"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  {/* <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">Fomento</p> */}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Esta pesquisa foi desenvolvida com o apoio destas instituições.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            {/* <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologias Utilizadas</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                RDF (Resource Description Framework) • Turtle Syntax • Ontologias Semânticas • Visualização de Grafos •
                Web Semântica
              </p>
            </div> */}

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
                Visualização Powered by Sketch Zazuko
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
