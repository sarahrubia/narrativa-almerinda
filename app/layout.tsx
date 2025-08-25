import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grafo de Conhecimento - Apresentação Científica",
  description:
    "Visualização interativa de grafo de conhecimento sobre figura histórica, desenvolvido para apresentação em evento científico.",
  keywords: "RDF, Linked Data, Knowledge Graph, Semantic Web, Digital Humanities, Historical Research",
  authors: [{ name: "Nome do Pesquisador" }],
  openGraph: {
    title: "Grafo de Conhecimento - Figura Histórica",
    description: "Dataset semântico e visualização interativa para pesquisa acadêmica",
    type: "website",
    url: "https://sarahrubia.github.io/narrativa-almerinda/",
    images: [
      {
        url: "/historical-academic-portrait.png",
        width: 800,
        height: 600,
        alt: "Figura histórica representada no grafo de conhecimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grafo de Conhecimento - Apresentação Científica",
    description: "Visualização interativa de pesquisa histórica usando tecnologias de Web Semântica",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
