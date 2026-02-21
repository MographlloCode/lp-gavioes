import type { InstitutionalPage } from "../types";

export const quemSomosPage: InstitutionalPage =
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
};
