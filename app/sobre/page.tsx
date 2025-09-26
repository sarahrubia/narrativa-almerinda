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
                  <strong>Introdução:</strong> A crescente digitalização do Patrimônio Cultural e o avanço das Humanidades Digitais ampliaram o acesso ao conhecimento, mas também expuseram desafios de fragmentação e interoperabilidade semântica dos dados, frequentemente confinados em "silos" institucionais.
                </p>
                <p>
                  <strong>Tese:</strong> Este trabalho defende que a integração semântica, fundamentada na Organização do Conhecimento e em tecnologias de Dados Interligados <i>Linked Data</i>, permite tecer narrativas significativas que conectam acervos e enriquecem a compreensão do patrimônio.
                </p>
                <p>
                  <strong>Objetivos:</strong> A partir deste estudo, objetiva-se analisar os desafios e requisitos para a integração de dados culturais e avaliar o potencial de narrativas baseadas em dados para dar visibilidade a figuras históricas sub-representadas.
                </p>
                <p>
                  <strong>Metodologia:</strong> A pesquisa, de natureza aplicada e qualitativa, culmina em um estudo de caso: a construção de uma narrativa semanticamente estruturada sobre a trajetória da ativista negra Almerinda Farias Gama. O processo envolveu a curadoria de fontes heterogêneas, a modelagem de entidades e eventos com base em ontologias como CIDOC CRM e a Narrative Ontology (NOnt), e a análise dos desafios práticos dessa representação.
                </p>
                <p>
                  <strong>Resultados:</strong> A modelagem demonstra que a integração semântica transforma dados fragmentados em uma rede de conhecimento coesa e contextualizada. A modelagem superou as limitações de representações convencionais, restituindo a agência histórica e o impacto interseccional de Almerinda Farias Gama. A análise revela desafios persistentes na representação da identidade interseccional (raça, gênero, ativismo), na modelagem de conceitos abstratos (racismo, direitos) e na captura de nuances contextuais que os modelos semânticos padrão nem sempre suportam adequadamente.
                </p>
                <p>
                  <strong>Contribuições:</strong> A tese oferece contribuições teóricas ao formalizar a narrativa como uma entidade ontológica autônoma e reforçar o Patrimônio Cultural como um campo unificador de disciplinas. Metodologicamente, a pesquisa inova ao propor um método replicável de enriquecimento semântico que preserva tanto a evidência documental quanto a interpretação curatorial crítica. O trabalho contribui socialmente ao dar visibilidade a uma figura histórica sub-representada e tecnologicamente ao oferecer soluções de baixo custo para a publicação de dados vinculados, como o modelo de dereferenciação de URIs com GitHub Pages. O estudo, portanto, serve como um modelo para a representação digital de trajetórias historicamente marginalizadas, articulando um <i>framework</i> que transforma a modelagem de dados em um processo hermenêutico crítico.
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
                    Desafios semânticos na integração de acervos do Patrimônio Cultural: a modelagem ontológica da narrativa digital de Almerinda Farias Gama.
                  </strong> 2025. 335 f. Tese (Doutorado em Gestão e Organização do Conhecimento) - Escola de Ciência da Informação, Universidade Federal de Minas Gerais, Belo Horizonte, 2025. 
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
