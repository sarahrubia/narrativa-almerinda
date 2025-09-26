# Narrativa Semântica de Almerinda Farias Gama: Uma Abordagem com Linked Data

**Organização do Conhecimento, Humanidades Digitais e Patrimônio Cultural**

## Resumo do Projeto

Este projeto aborda o desafio da **fragmentação de dados culturais** em "silos" institucionais, propondo uma solução de **integração semântica** para tecer narrativas ricas e coesas sobre o **Patrimônio Cultural**.

### Tese Central

A integração semântica, fundamentada na **Organização do Conhecimento** e em tecnologias de **Dados Interligados (Linked Data)**, é a chave para transformar acervos digitais isolados em uma rede de conhecimento interconectada, permitindo a construção de narrativas significativas que dão visibilidade a **figuras históricas sub-representadas**.

### Objetivos

1.  **Analisar** os desafios e requisitos para a integração de dados culturais heterogêneos.
2.  **Avaliar** o potencial das narrativas baseadas em dados para restituir a **agência histórica** de figuras marginalizadas.
3.  **Desenvolver** um **estudo de caso prático** que sirva como modelo replicável de enriquecimento semântico.

-----

## Metodologia e Modelagem Semântica

O projeto é um estudo de caso aplicado e qualitativo, focado na trajetória da ativista negra **Almerinda Farias Gama** (sindicalista e pioneira do ativismo feminino e negro no Brasil).

O processo de modelagem envolveu:

  * **Curadoria Crítica:** Coleta e análise de fontes documentais heterogêneas.
  * **Modelagem Ontológica:** Uso de ontologias padrão como **CIDOC CRM** para entidades e eventos patrimoniais, e a **Narrative Ontology (NOnt)** para formalizar a narrativa como uma entidade ontológica autônoma.
  * **Representação Interseccional:** Tentativa de capturar a complexidade da identidade (raça, gênero, ativismo) e conceitos abstratos (racismo, direitos) que modelos semânticos padrão nem sempre suportam.

### Resultados e Contribuições

A modelagem transformou dados fragmentados em uma **rede de conhecimento coesa e contextualizada**.

| Categoria | Contribuições Chave |
| :--- | :--- |
| **Teórica** | Formalização da narrativa como entidade ontológica autônoma; reforço do Patrimônio Cultural como campo unificador. |
| **Metodológica** | Proposta de um **método replicável de enriquecimento semântico** que preserva tanto a evidência documental quanto a interpretação curatorial crítica. |
| **Social** | Dá **visibilidade** a uma figura histórica sub-representada, restituindo sua agência. |
| **Tecnológica** | Solução de **baixo custo** para publicação de **Linked Data** (Dereferenciação de URIs via GitHub Pages). |

-----

### Site de Apresentação e Portfólio

O projeto possui um site de apresentação que detalha a pesquisa, metodologia e resultados.

**Acesse aqui:** [https://sarahrubia.github.io/narrativa-almerinda/](https://sarahrubia.github.io/narrativa-almerinda/)

### Visualização Interativa do Grafo de Conhecimento

A modelagem resultou em cerca de **70 entidades ontológicas** e suas conexões. O grafo pode ser explorado dinamicamente na plataforma Zazuko:

  * **Ferramenta:** Zazuko
  * **Funcionalidades:** Navegação, filtragem por tipo de entidade, busca semântica, análise de centralidade.

### Publicação e Dereferenciação de Linked Data (Solução GitHub Pages)

O coração técnico do projeto é a publicação do grafo de conhecimento como Linked Data de forma **acessível e gratuita**.

Em vez de hospedar um grande arquivo RDF, implementou-se uma técnica de fragmentação e dereferenciação usando o **GitHub Pages**:

1.  **Fragmentação:** O grafo de conhecimento é dividido em arquivos `.ttl` (Turtle) menores, onde cada arquivo representa uma única entidade ontológica (sujeito).
2.  **Hospedagem:** Os arquivos `.ttl` são carregados no repositório.
3.  **Dereferenciação:** O **GitHub Pages** transforma o repositório em uma fonte de dados abertos. Ao acessar a URI de uma entidade, um agente de software é direcionado ao respectivo arquivo `.ttl`, satisfazendo o princípio do Linked Data.

**Exemplo:** A entidade `data:person_almerinda-farias-gama` agora possui uma URI funcional e acessível:
[https://sarahrubia.github.io/narrativa-almerinda/person_almerinda-farias-gama.ttl](https://sarahrubia.github.io/narrativa-almerinda/person_almerinda-farias-gama.ttl)

-----

## Palavras-chave

**Integração de Dados** • **Organização do Conhecimento** • **Patrimônio Cultural** • **Humanidades Digitais** • **Narrativas Digitais** • **Linked Data** • **Almerinda Farias Gama**

-----

## Para Colaborar

  * **Explore o Código:** Navegue pelos arquivos `.ttl` na pasta `/public` para entender a modelagem.
  * **Sugestões:** Abra uma *Issue* para relatar desafios de modelagem, erros ou sugerir novas fontes de dados.
  * **Contribua:** Proponha melhorias na modelagem ou no *script* de fragmentação via *Pull Requests*.

