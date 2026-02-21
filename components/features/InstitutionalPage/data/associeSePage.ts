import type { InstitutionalPage } from "../types";

export const associeSePage: InstitutionalPage =
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
};
