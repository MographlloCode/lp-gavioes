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
    slug: "associe-se",
    section: "Institucional",
    title: "Associe-se",
    description:
      "Informacoes de associacao e recadastramento com documentos, planos e formas de pagamento.",
    blocks: [
      {
        type: "title",
        kicker: "Gavioes da Fiel",
        title: "Associe-se",
        subtitle: "Nao e socio ainda? Quer fazer recadastramento?",
      },
      {
        type: "richText",
        content: [
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Para ser socio da torcida ou fazer seu recadastramento, compareca em nossa sede com os documentos abaixo.",
              },
            ],
          },
          {
            kind: "subheading",
            nodes: [{ text: "Primeiro passo - Documentos" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Ficha de inscricao disponibilizada na sede." }],
              [{ text: "1 foto 3x4." }],
              [{ text: "Copia do RG ou CNH." }],
              [{ text: "Copia do comprovante de residencia." }],
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Atencao: menores de 18 anos devem apresentar a ficha de autorizacao assinada pelos pais ou responsavel. ",
              },
              {
                text: "Clique aqui para baixar a ficha de autorizacao",
                link: "https://gavioes.com.br/4_2.pdf",
                underline: true,
              },
              { text: "." },
            ],
          },
        ],
      },
      {
        type: "columns",
        columns: [
          [
            {
              kind: "subheading",
              nodes: [{ text: "Segundo passo - Pagamento" }],
            },
            {
              kind: "paragraph",
              nodes: [{ text: "Novos socios:" }],
            },
            {
              kind: "list",
              items: [
                [{ text: "Plano quadrimestral - R$ 50." }],
                [{ text: "Plano anual - R$ 110." }],
              ],
            },
          ],
          [
            {
              kind: "subheading",
              nodes: [{ text: "Formas de pagamento" }],
            },
            {
              kind: "list",
              items: [
                [{ text: "Dinheiro." }],
                [{ text: "Cartao de debito/credito." }],
                [{ text: "Pix." }],
              ],
            },
            {
              kind: "paragraph",
              nodes: [
                {
                  text: "Caso seja de outra cidade ou estado, entrar em contato pelo WhatsApp do Departamento de Mensalidades: (11) 94298-9699.",
                },
              ],
            },
          ],
        ],
      },
      {
        type: "location",
        location: {
          name: "Gavioes da Fiel Sede Principal",
          address: "R. Cristina Tomas, 183",
          neighborhood: "Bom Retiro",
          zipCode: "01129-020",
          city: "Sao Paulo-SP",
          phone: "(11) 3221-2066",
          mapQuery:
            "R. Cristina Tomas, 183 - Bom Retiro, Sao Paulo - SP, 01129-020",
        },
      },
    ],
  },
  {
    slug: "conselho",
    section: "Institucional",
    title: "Conselho Deliberativo",
    description:
      "Historico, atribuicoes e composicao 2024 - 2027 do Conselho Deliberativo dos Gavioes da Fiel.",
    blocks: [
      {
        type: "title",
        kicker: "Institucional",
        title: "Conselho Deliberativo",
        subtitle:
          "Estrutura administrativa historica dos Gavioes da Fiel, com funcao fiscalizadora e de orientacao da diretoria executiva.",
      },
      {
        type: "richText",
        content: [
          {
            kind: "paragraph",
            nodes: [
              {
                text: "O Conselho Deliberativo dos Gavioes da Fiel foi criado desde a fundacao, em 1969. O principal objetivo era ser um agente fiscalizador e, ao mesmo tempo, dar suporte para toda a diretoria executiva, principalmente ao presidente, orientando e colaborando em todas as questoes necessarias.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Os Gavioes da Fiel sao a primeira torcida organizada do Brasil a ter uma estrutura administrativa interna regida por regras estatutarias.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "No inicio, nao havia eleicoes para a escolha dos conselheiros, pois eram todos indicados por membros da diretoria. O criterio para fazer parte era pela caminhada na sede, conduta e por servicos prestados a entidade.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "As eleicoes para conselheiros comecaram somente em 1993, quando Jose Claudio de Almeida Moraes (Dentinho) foi escolhido para assumir a presidencia dos Gavioes. Anteriormente, o presidente era eleito pelo Conselho Deliberativo, composto por 40 pessoas: 20 conselheiros bienais e 20 conselheiros vitalicios.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Como reza o Estatuto do Gremio Gavioes da Fiel Torcida, atualmente existem tres tipos de conselheiros: os trienais (escolhidos por meio do voto do associado), os vitalicios e os benemeritos. Os vitalicios (ex-presidentes e indicados) sempre podem participar do Conselho e ter poder de voto. Ja os benemeritos sao conselheiros vitalicios que, por algum motivo, nao conseguem comparecer a todas as reunioes; recebem o reconhecimento de benemeritos, podem frequentar as reunioes, mas nao possuem poder de voto.",
              },
            ],
          },
          {
            kind: "paragraph",
            nodes: [
              {
                text: "Sao realizadas reunioes mensais sobre os mais variados assuntos, como aprovacao de balancos financeiros, atuacao dentro do Corinthians, reformas na estrutura e demais pautas pertinentes aos Gavioes e ao Corinthians. Ao Conselho cabe orientar a diretoria e preservar normas, regras e ideais presentes no estatuto.",
              },
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Conselho Deliberativo 2024 - 2027" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Presidente: Raimundo Cesar Faustino (Capa)." }],
              [{ text: "Vice-presidente: Joao Roberto Dutra (Dutra Itu)." }],
              [{ text: "1o secretario: Ademilson Bueno Pires (Ademilson)." }],
              [{ text: "2o secretario: Carlos Tadeu Miranda (Miranda)." }],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Conselheiros benemeritos eleitos" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Raimundo Faustino (Capa)." }],
              [{ text: "Edson Pereira (Nego Elson)." }],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Conselheiros trienais eleitos" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Andre Vedovate (Dede Sapopemba)." }],
              [{ text: "Andre Machado (Alemao)." }],
              [{ text: "Bruno Machado (Gaga)." }],
              [{ text: "Celso Ribeiro (Celso Guarulhos)." }],
              [{ text: "Cleiton de Assis (Cleitinho)." }],
              [{ text: "Danilo Pereira (Danilinho)." }],
              [{ text: "Danilo Silva (Biu)." }],
              [{ text: "Eder Luiz (Ed)." }],
              [{ text: "Erico Almeida (Kinho)." }],
              [{ text: "Felipe Cavalin (Gigante)." }],
              [{ text: "Felipe Souza (Fell ULC)." }],
              [{ text: "Gabriel Rodrigues (Gabriel Taboao)." }],
              [{ text: "Kaue Deungaro (Kaue)." }],
              [{ text: "Luiz Nogueira (Pilik)." }],
              [{ text: "Marcos Rodrigo (Marcao)." }],
              [{ text: "Moacir Rodrigues (Moacir ZL)." }],
              [{ text: "Reginaldo Coelho (Kbcao Itaqua)." }],
              [{ text: "Sergio Luis (Serginho ZN)." }],
              [{ text: "Tiago Rocha (Tiaguinho)." }],
              [{ text: "Wildner D Paula (Pulguinha)." }],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Suplentes" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Joao Vitor (JV do Vale)." }],
              [{ text: "Ednilson das Chagas (Ednilson)." }],
              [{ text: "Raphael Sales (Cara Branca)." }],
              [{ text: "Edjailson Silva (Perrechy)." }],
              [{ text: "Jefferson Costa (Febem)." }],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Conselho Fiscal - Titulares" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Eder Luiz (Ed)." }],
              [{ text: "Kaue Deungaro (Kaue)." }],
              [{ text: "Douglas Deungaro (Metaleiro)." }],
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Conselho Fiscal - Suplentes" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Luiz Nogueira (Pilik)." }],
              [{ text: "Roberto Carlos Borges (Roberto Carlos)." }],
              [{ text: "Joao Carlos Nascimento (Joao)." }],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "diretoria",
    section: "Institucional",
    title: "Diretoria Executiva",
    description:
      "Informacoes oficiais sobre a Diretoria Executiva eleita para o periodo 2024/2027.",
    blocks: [
      {
        type: "title",
        kicker: "Institucional",
        title: "Diretoria Executiva",
        subtitle:
          "Composicao oficial da diretoria eleita pelos socios dos Gavioes da Fiel.",
      },
      {
        type: "richText",
        content: [
          {
            kind: "paragraph",
            nodes: [
              {
                text: "A Diretoria Executiva e eleita a cada tres anos pelos socios dos Gavioes da Fiel. Ela e responsavel por administrar as atividades que envolvem a torcida e o carnaval.",
              },
            ],
          },
        ],
      },
      {
        type: "richText",
        content: [
          {
            kind: "subheading",
            nodes: [{ text: "Composicao da diretoria 2024/2027" }],
          },
          {
            kind: "list",
            items: [
              [{ text: "Presidente: Alexandre Domenico Pereira (Ale)." }],
              [
                {
                  text: "Vice-Presidente: Fabio de Oliveira Camara (Fantasma) - Sergio Luis Lopes de Barros (Serginho).",
                },
              ],
            ],
          },
        ],
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
          {
            src: "/gavioes_torcida.png",
            alt: "Torcida da Gavioes com bandeiras",
            caption: "Arquivo historico da torcida em festa.",
            credit: "Acervo Gavioes",
            aspectRatio: "standard",
          },
          {
            src: "/gavioes_torcida_2.png",
            alt: "Setor alvinegro lotado com a Gavioes",
            caption: "Ambiente de arquibancada em jogo importante.",
            credit: "Acervo Gavioes",
            aspectRatio: "wide",
          },
          {
            src: "/camisa_gavioes_02.png",
            alt: "Detalhe da camisa preta da Gavioes",
            caption: "Linha oficial em destaque na galeria.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
          {
            src: "/camisa_gavioes_03.png",
            alt: "Camisa listrada institucional da Gavioes",
            caption: "Versao alternativa para demonstrar o carrossel.",
            credit: "Loja Gavioes",
            aspectRatio: "square",
          },
        ],
      },
      {
        type: "location",
        title: "Bloco de localizacao institucional",
        subtitle:
          "Este componente permite publicar dados de sede ou subsede com mapa incorporado e informacoes estruturadas.",
        location: {
          name: "Gavioes da Fiel SubSede ABC",
          address: "Rua dos Coqueiros, 100",
          neighborhood: "Campestre",
          zipCode: "090080-010",
          city: "Santo Andre-SP",
          foundation: "01/10/1992",
          phone: "Nao informado",
          mapQuery:
            "Rua dos Coqueiros, 100, Campestre, Santo Andre - SP, 090080-010",
        },
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
