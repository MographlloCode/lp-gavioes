import type { InstitutionalPage } from "./types";

export const institutionalPages: InstitutionalPage[] = [
  {
    slug: "quem-somos",
    section: "Institucional",
    title: "Gaviões da Fiel",
    description:
      "Dados institucionais do Gremio Gavioes da Fiel Torcida, maior torcida organizada do Sport Club Corinthians Paulista.",
    blocks: [
      {
        type: "title",
        kicker: "Institucional",
        title: "Gaviões da Fiel",
        subtitle:
          "O Grêmio Gaviões da Fiel Torcida é a maior torcida organizada do Sport Club Corinthians Paulista. Além disso, é considerada a maior organizada do Brasil.",
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Torcida" }],
          },
          {
            kind: "list",
            items: [
              [
                {
                  text: "Principal atividade: acompanhar o Corinthians em todos os jogos.",
                },
              ],
              [{ text: "Número de sócios: 131 mil (dezembro/2023)." }],
              [
                {
                  text: "1 sede social e 11 subsedes (sendo 10 no Brasil e 1 no Japão).",
                },
              ],
              [
                {
                  text: "Fontes de receita: mensalidade, bar, cantina, loja física e virtual e eventos.",
                },
              ],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Carnaval" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "1975: Criação do Bloco Carnavalesco." }],
              [{ text: "12 títulos conquistados em 13 anos de bloco." }],
              [
                {
                  text: "1988: A Liga das Escolas de Samba convida os Gaviões para concorrer ao grupo especial.",
                },
              ],
              [{ text: "4 títulos conquistados no Carnaval de SP." }],
              [{ text: "3.500 componentes no desfile de 2019." }],
              [
                {
                  text: "Maior audiência da TV e a maior torcida no Anhembi.",
                },
              ],
              [{ text: "Fonte de receita: patrocínios e ensaios." }],
            ],
          },
        ],
      },
      {
        type: "image",
        image: {
          src: "/gavioes_torcida_2.png",
          alt: "Torcida da Gaviões da Fiel nas arquibancadas",
          caption: "Manifestação da torcida em dia de jogo.",
          credit: "Acervo Gaviões",
          aspectRatio: "wide",
        },
      },
    ],
  },
  {
    slug: "identidade-gavioes",
    section: "Institucional",
    title: "Identidade e legado da Gavioes da Fiel",
    description:
      "Modelo institucional com blocos reutilizaveis para narrativa editorial, acervo e informacoes oficiais.",
    blocks: [
      {
        type: "title",
        kicker: "Pagina institucional",
        title: "Quem somos e como preservamos nossa historia",
        subtitle:
          "Este modelo foi pensado para publicar conteudos institucionais completos, com narrativa visual e modular.",
      },
      {
        type: "richText",
        content: [
          {
            kind: "paragraph",
            nodes: [
              {
                text: "A Gavioes da Fiel nasceu da arquibancada e se consolidou como uma das maiores expressoes de organizacao popular no futebol brasileiro. ",
              },
              {
                text: "Nesta estrutura institucional",
                bold: true,
              },
              {
                text: ", apresentamos informacoes em formato editorial para facilitar leitura, consulta e reutilizacao por diferentes areas.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "O modelo permite misturar texto, imagem, citações e galeria em uma mesma pagina, mantendo padrao visual. Para conhecer atualizacoes do projeto, visite o ",
              },
              {
                text: "catalogo de noticias",
                link: "/noticias",
                underline: true,
              },
              { text: "." },
            ],
          },
          {
            kind: "list",
            items: [
              [
                { text: "Estrutura modular para diferentes assuntos institucionais." },
              ],
              [
                {
                  text: "Blocos reutilizaveis para memoria, projetos sociais e conteudos historicos.",
                },
              ],
              [
                {
                  text: "Suporte a formatacao de texto com destaque, italico, links e listas.",
                },
              ],
            ],
          },
        ],
      },
      {
        type: "quote",
        quote:
          "Lealdade, humildade e procedimento seguem como base da nossa historia e da nossa comunicacao.",
        author: "Gavioes da Fiel",
      },
      {
        type: "columns",
        columns: [
          [
            {
              kind: "subheading",
              nodes: [{ text: "Memoria coletiva" }],
            },
            {
              kind: "paragraph",
              nodes: [
                {
                  text: "A preservacao do acervo e parte essencial da identidade da torcida. Cada faixa, foto e relato carrega contexto historico e cultural.",
                },
              ],
            },
          ],
          [
            {
              kind: "subheading",
              nodes: [{ text: "Formacao e continuidade" }],
            },
            {
              kind: "paragraph",
              nodes: [
                {
                  text: "A pagina institucional organiza informacoes para novas geracoes compreenderem a trajetoria da entidade de forma clara e acessivel.",
                },
              ],
            },
          ],
        ],
      },
      {
        type: "textWithImage",
        imagePosition: "right",
        image: {
          src: "/gavioes_torcida_2.png",
          alt: "Torcida da Gavioes com bandeiras no estadio",
          caption: "Manifestacao coletiva da torcida em dia de jogo.",
          credit: "Acervo Gavioes",
          aspectRatio: "wide",
        },
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Texto ao lado de foto" }],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Esse bloco foi criado para combinar narrativa e imagem no mesmo eixo de leitura. Em desktop, o texto aparece ao lado da foto. Em mobile, a leitura continua fluida em coluna unica.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              { text: "Tambem e possivel destacar trechos em " },
              { text: "negrito", bold: true },
              { text: ", usar " },
              { text: "italico", italic: true },
              { text: " e inserir " },
              { text: "links internos", link: "/contato", underline: true },
              { text: "." },
            ],
          },
        ],
      },
      {
        type: "image",
        image: {
          src: "/logo_gavioes_subsede.png",
          alt: "Simbolo de subsede da Gavioes da Fiel",
          caption: "Exemplo de imagem com legenda e credito.",
          credit: "Comunicacao Gavioes",
          aspectRatio: "standard",
        },
      },
      {
        type: "gallery",
        title: "Galeria de fotos com modal",
        description:
          "Clique em qualquer imagem para abrir o modal, navegar entre itens e visualizar legenda.",
        images: [
          {
            src: "/gavioes_torcida.png",
            alt: "Torcida da Gavioes no estadio",
            caption: "Festa da arquibancada em noite decisiva.",
            credit: "Acervo Gavioes",
            aspectRatio: "standard",
          },
          {
            src: "/gavioes_torcida_2.png",
            alt: "Bandeiras da torcida levantadas",
            caption: "Mosaico de bandeiras em setor lotado.",
            credit: "Acervo Gavioes",
            aspectRatio: "wide",
          },
          {
            src: "/camisa_gavioes_01.png",
            alt: "Camisa oficial da Gavioes",
            caption: "Material oficial da torcida.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
          {
            src: "/camisa_gavioes_02.png",
            alt: "Camisa preta da Gavioes",
            caption: "Linha de vestuario institucional.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
          {
            src: "/camisa_gavioes_03.png",
            alt: "Camisa listrada da Gavioes",
            caption: "Edicao comemorativa com identidade visual da torcida.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
          {
            src: "/shorts_gavioes_01.png",
            alt: "Short oficial da Gavioes",
            caption: "Complemento da linha oficial.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Como replicar esta pagina" }],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Para criar uma nova pagina institucional, basta adicionar um novo objeto no arquivo de dados com outro slug e montar os blocos desejados.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              { text: "Exemplo de rota: " },
              {
                text: "/institucional/identidade-gavioes",
                bold: true,
              },
              {
                text: ". O mesmo renderer funciona para qualquer conteudo da categoria.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getInstitutionalPageBySlug(slug: string) {
  return institutionalPages.find((page) => page.slug === slug);
}
