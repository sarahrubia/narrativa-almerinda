import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Almerinda Farias Gama - Grafo de Conhecimento",
  description:
    "Visualização interativa de grafo de conhecimento sobre Almerinda Farias Gama, desenvolvido como parte da tese de doutorado.",
  keywords: "RDF, Linked Data, Knowledge Graph, Information Science, Semantic Web, Digital Humanities",
  authors: [{ name: "Sarah Rúbia de Oliveira Santos" }],
  openGraph: {
    title: "Almerinda Farias Gama: Grafo de Conhecimento",
    description: "Dataset semântico e visualização interativa para pesquisa acadêmica",
    type: "website",
    url: "https://sarahrubia.github.io/narrativa-almerinda/",
    images: [
      {
        url: "/almerinda-farias-gama.jpg",
        width: 800,
        height: 600,
        alt: "Almerinda Farias Gama, representada no grafo de conhecimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almerinda Farias Gama",
    description: "Visualização interativa de narrativa sobre Almerinda Farias Gama usando tecnologias de Web Semântica",
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
