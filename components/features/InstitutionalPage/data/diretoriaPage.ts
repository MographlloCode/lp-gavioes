import type { InstitutionalPage } from "../types";

export const diretoriaPage: InstitutionalPage =
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
};
