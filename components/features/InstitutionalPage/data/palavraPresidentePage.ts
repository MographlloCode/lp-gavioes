import type { InstitutionalPage } from "../types";

export const palavraPresidentePage: InstitutionalPage = {
  slug: "palavra-do-presidente",
  section: "Institucional",
  title: "Palavra do Presidente",
  description:
    "Comunicado da nova diretoria dos Gavioes da Fiel para o ciclo 2024-2027.",
  blocks: [
    {
      type: "title",
      kicker: "Institucional",
      title: "Palavra do Presidente",
      subtitle: "Mensagem oficial da nova diretoria dos Gavioes da Fiel.",
    },
    {
      type: "richText",
      content: [
        {
          kind: "paragraph",
          nodes: [
            {
              text: "A nova diretoria dos Gavioes da Fiel tomou posse no dia 1 de abril de 2024, em nossa sede, no bairro do Bom Retiro.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Ale, Fantasma e Seginho assumem as posicoes de presidente e vice-presidente da torcida durante os proximos tres anos.",
            },
          ],
        },
      ],
    },
    {
      type: "youtubeVideo",
      title: "Video oficial",
      subtitle: "Pronunciamento da nova diretoria.",
      video: {
        url: "https://www.youtube.com/watch?v=W_wXERh-G10",
        title: "Palavra do Presidente - Gavioes da Fiel",
      },
    },
  ],
};
