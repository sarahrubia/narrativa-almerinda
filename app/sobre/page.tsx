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
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Sobre o Projeto</h1>
          <p className="text-slate-600 text-lg">Informações sobre a pesquisa, metodologia e autoria.</p>
        </div>

        <div className="space-y-8">
          {/* Seção da Autora */}
          <Card className="shadow-xl border border-gray-200 bg-white dark:bg-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="h-7 w-7 text-slate-700" />
                Sobre a Autora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sarah1.jpg`}
                    alt="Foto da autora"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Sarah Rúbia de Oliveira Santos</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Doutoranda e Mestre em Gestão e Organização do Conhecimento</Badge>
                      <Badge variant="secondary">Pesquisadora</Badge>
                      <Badge variant="secondary">Bibliotecária</Badge>
                    </div>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <p>
                      Doutoranda e Mestre pelo Programa de Pós-Graduação em Gestão & Organização do Conhecimento da Universidade Federal de Minas Gerais (PPG-GOC/UFMG) e Bacharela em Biblioteconomia pela Universidade Federal de Alagoas (UFAL). Possui uma sólida trajetória acadêmica, com atuação integrada em projetos de pesquisa, ensino e extensão.
                    </p>
                    <p>
                      É pesquisadora em múltiplos grupos, incluindo o Grupo de Pesquisa Representação do Conhecimento e Recuperação da Informação (RECRI/UFMG), o Laboratório de Estudos Métricos da Informação na Web (Lab iMetrics) e o Grupo de Pesquisa em Política e Tecnologias da Informação e Comunicação (GPOLITICs). Atualmente, suas investigações se concentram na aplicação de grafos de conhecimento e Linked Data para a representação e análise de dados históricos, contribuindo para o desenvolvimento de novas metodologias de visualização e interpretação de fontes primárias. Suas principais linhas de interesse são Web Semântica, Linked Data, Ciência Aberta, Comunicação Científica e Estudos Métricos da Informação.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border border-gray-200 bg-white dark:bg-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="h-7 w-7 text-slate-700" />
                Sobre a Orientadora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/celia.jpg`}
                    alt="Foto da orientadora"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Célia da Consolação Dias</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Doutora em Ciência da Informação</Badge>
                      <Badge variant="secondary">Professora</Badge>
                      <Badge variant="secondary">Pesquisadora</Badge>
                    </div>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <p>
                      Professora associada do Departamento de Organização e Tratamento da Informação da Escola de Ciência da Informação da Universidade Federal de Minas Gerais, Brasil. Pós-Doutora pela Carlos III de Madrid, Espanha. Vice presidente da ISKO Brasil. Mestrado e doutorado em Ciência da Informação pela Escola de Ciência da Informação/UFMG. Professora Visitante da Universidad Carlos III de Madrid, Espanha (FACULTAD DE HUMANIDADES, DEPARTAMENTO DECOMUNICACIÓN Y DOCUMENTACIÓN), no período de março a outubro de 2024. Graduada em Biblioteconomia pela Escola de Ciência da Informação da UFMG. Coordenadora do Programa de Pós-Graduação em Gestão e Organização do Conhecimento (PPGGOC/UFMG) no período de 2019 a 2023, professora permanente do Programa de Pós-Graduação em Gestão e Organização do Conhecimento, PPGGOC da UFMG. 
                    </p>
                    <p>
                      Coordenadora do Grupo de Pesquisa Representação do Conhecimento e Recuperação da Informação - RECRI/UFMG. Meus interesses de pesquisa estão inseridos no projeto Estudos de Organização e representação da informação que perpassam por investigações relacionadas às questões de organização das informações e vocabulários controlados em contextos diversos que contribuem para melhorar a recuperação da informação do ponto de vista teórico e de pesquisas aplicadas. 
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resumo do Trabalho */}
          <Card className="shadow-xl border border-gray-200 bg-white dark:bg-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-7 w-7 text-slate-700" />
                Resumo do Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Introdução:</strong> A crescente digitalização do Patrimônio Cultural e o avanço das Humanidades Digitais ampliaram o acesso ao conhecimento, mas também expuseram desafios relacionados à fragmentação, heterogeneidade e limitações representacionais dos vocabulários ontológicos convencionais, especialmente na modelagem de figuras históricas complexas e marginalizadas. Os sistemas tradicionais de organização do conhecimento tendem a oferecer visões reducionistas de identidades interseccionais, frequentemente falhando em capturar a agência política e as nuances culturais específicas que caracterizam trajetórias de ativistas subalternizados.
                </p>
                <p>
                  <strong>Tese:</strong> Este trabalho defende que o enriquecimento semântico, fundamentado na criação de vocabulários de agência especializados e conceitos interseccionais específicos, permite superar as limitações dos frameworks ontológicos convencionais para representar adequadamente narrativas de figuras historicamente marginalizadas, transformando fragmentos documentais dispersos em grafos de conhecimento dinâmicos que preservam tanto a evidência factual quanto a complexidade identitária.
                </p>
                <p>
                  <strong>Metodologia:</strong> A pesquisa, de natureza aplicada e qualitativa, implementa uma abordagem epistemologicamente híbrida que combina validação institucional (top-down) com execução fundamentalmente bottom-up, culminando na construção de uma narrativa semanticamente enriquecida sobre a trajetória da ativista negra Almerinda Farias Gama. O processo envolveu: (1) curadoria crítica de fontes heterogêneas provenientes de múltiplas instituições (Arquivo Nacional, FGV, Hemeroteca Digital); (2) criação de um vocabulário de agência especializado com 18 propriedades ontológicas que formalizam intencionalidade política; (3) modelagem de eventos e identidades através da articulação entre CIDOC-CRM, Narrative Ontology (NOnt) e SKOS; (4) implementação de uma estrutura narrativa tripartite (Fábula-Narração-Narrativa) que eleva narrativas construídas ao status de "cidadãs de primeira classe"; e (5) desenvolvimento de interface web para democratização do acesso aos artefatos de pesquisa.
                </p>
                <p>
                  <strong>Objetivos:</strong> A partir deste estudo de caso, objetiva-se desenvolver e validar uma metodologia de enriquecimento semântico que supere as limitações dos vocabulários genéricos na representação de identidades interseccionais, analisar os desafios práticos da formalização ontológica de agência política, e demonstrar como grafos de conhecimento culturalmente sensíveis podem restituir visibilidade a figuras históricas sub-representadas através de representações que honram sua complexidade identitária e impacto transformador.
                </p>
                <p>
                  <strong>Resultados:</strong> A aplicação da metodologia resultou na criação de 89 entidades ontológicas especializadas distribuídas em oito categorias funcionais, constituindo um framework robusto para representação de trajetórias interseccionais. A análise revela que os desafios persistentes na representação da identidade interseccional, na modelagem de conceitos abstratos e na captura de nuances contextuais podem ser efetivamente superados através de estratégias de enriquecimento que transcendem a aplicação mecânica de vocabulários estabelecidos para constituir processo hermenêutico de negociação crítica com frameworks existentes.
                </p>
                <p>
                  <strong>Contribuições:</strong> A pesquisa gera quatro contribuições principais: (1) metodológica - desenvolvimento de abordagem híbrida de curadoria digital e articulação de múltiplos frameworks ontológicos; (2) técnica - criação do vocabulário de agência especializado e formalização de estruturas narrativas complexas; (3) prática - o grafo de conhecimento resultante como modelo replicável para tratamento de narrativas fragmentadas sobre figuras marginalizadas; e (4) social - restituição de agência narrativa a trajetórias historicamente invisibilizadas, contribuindo para democratização de perspectivas e descolonização de acervos digitais através de representações culturalmente sensíveis que contestam vieses estruturais dos sistemas de conhecimento dominantes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referência ABNT */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-7 w-7 text-slate-700" />
                Referência Bibliográfica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-700">
                <p className="text-slate-800 font-mono text-sm leading-relaxed">
                  SANTOS, S. R. O. de.{" "}
                  <strong>
                    Desafios semânticos na representação digital de entidades interseccionais: modelagem ontológica de Almerinda Farias Gama.
                  </strong> 2025. 275 f. Tese (Doutorado em Gestão e Organização do Conhecimento) - Escola de Ciência da Informação, Universidade Federal de Minas Gerais, Belo Horizonte, 2025. Disponível em: https://github.com/sarahrubia/tese. 
                  {/* Acesso em:{" "}
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })} */}
                </p>
              </div>
              {/* <div className="mt-4 text-sm text-slate-600">
                <p>
                  <strong>Nota:</strong> Substitua os campos entre colchetes pelas informações específicas da sua
                  pesquisa.
                </p>
              </div> */}
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
                    <li>• Vocabulários CIDOC-CRM, NOnt, FOAF, etc.</li>
                    <li>• Princípios de Linked Data</li>
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
          <p>© {new Date().getFullYear()} - Pesquisa em Gestão e Organização do Conhecimento</p>
          <p className="mt-1">
            Visualização powered by{" "}
            <a
              href="https://sketch.zazuko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:underline"
            >
              Sketch Zazuko
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
