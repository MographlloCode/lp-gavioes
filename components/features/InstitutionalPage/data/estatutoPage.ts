import type { InstitutionalPage } from "../types";

const estatutoDownloadLink =
  "https://drive.google.com/file/d/1N5hwhbnPHnQ-kio0P0dFUoJoCKXdjgB9/view?usp=drive_link";

export const estatutoPage: InstitutionalPage = {
  slug: "estatuto",
  section: "Institucional",
  title: "Estatuto do Gremio Gavioes da Fiel Torcida",
  description:
    "Texto estatutario do Gremio Gavioes da Fiel Torcida, com capitulos, artigos, direitos, obrigacoes e estrutura de governanca.",
  blocks: [
    {
      type: "title",
      kicker: "Institucional",
      title: "Estatuto do Gremio Gavioes da Fiel Torcida",
      subtitle:
        "Documento oficial com normas, poderes, direitos e obrigacoes da entidade e de seus associados.",
    },
    {
      type: "richText",
      content: [
        {
          kind: "subheading",
          nodes: [{ text: "Baixe aqui o estatuto" }],
        },
        {
          kind: "paragraph",
          nodes: [
            { text: "Download oficial: " },
            {
              text: "Estatuto do Gremio Gavioes da Fiel Torcida",
              link: estatutoDownloadLink,
              underline: true,
            },
            { text: "." },
          ],
        },
      ],
    },
    {
      type: "richText",
      content: [
        {
          kind: "subheading",
          nodes: [
            {
              text: "Capitulo I - Da Denominacao, Simbolo, Sede, Objetivos e Patrimonio",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 1o. O GREMIO GAVIOES DA FIEL TORCIDA FORCA INDEPENDENTE, tambem designado pelo nome de GAVIOES DA FIEL, fundado em 01 de julho de 1969, com sede a Rua Cristina Tomas, 183, no bairro do Bom Retiro, Sao Paulo - SP, CEP 01129-020, inscrita no CNPJ 46.549.010/0001-81, e pessoa juridica de direito privado (entidade sem fins lucrativos).",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafo unico: GAVIOES DA FIEL podera manter unidades representativas oficiais (sub-sedes ou pontos de encontro) no Brasil e no exterior, mediante regulamento da Diretoria Executiva e homologacao do Conselho Deliberativo, tanto para abertura quanto para fechamento.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 2o. GAVIOES DA FIEL, composto exclusivamente de torcedores corinthianos, tem patrimonio e autonomia financeira propria, distintos dos associados, que nao respondem solidaria ou subsidiariamente pelas obrigacoes sociais, observadas as normas deste estatuto.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 3o. GAVIOES DA FIEL e constituido por prazo indeterminado, e sao imutaveis suas cores (branco e preto) e seu simbolo (um Gaviao ostentando o distintivo do Sport Club Corinthians Paulista).",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 4o. Sao atribuicoes da entidade:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Defender e proteger o nome do Sport Club Corinthians Paulista, preservando sua tradicao, festejando suas conquistas e estimulando campanhas para ampliar a torcida.",
              },
            ],
            [
              {
                text: "II - Promover atividades sociais, culturais, desportivas e filantropicas.",
              },
            ],
            [
              {
                text: "III - Esclarecer a fiel torcida sobre a administracao geral do Sport Club Corinthians Paulista.",
              },
            ],
            [
              {
                text: "IV - Difundir e unir a fiel torcida em torno do corinthianismo puro e verdadeiro.",
              },
            ],
            [
              {
                text: "V - Frequentar pracas esportivas em jogos do Sport Club Corinthians Paulista para incentivar o time e cobrar empenho dos jogadores.",
              },
            ],
            [
              {
                text: "VI - Manter escola de samba para participar do carnaval e de exibicoes programadas.",
              },
            ],
            [
              {
                text: "VII - Desempenhar atividades de forma independente, fiscalizadora e imune a politica e interesses de terceiros.",
              },
            ],
            [
              {
                text: "VIII - Manter atividades culturais, cursos de qualificacao, orientacao profissional, palestras e simposios.",
              },
            ],
            [
              {
                text: "IX - Implantar, sempre que possivel, atividades assistenciais, sociais e de lazer; promover etica, paz, cidadania, direitos humanos e democracia; desenvolver educacao e formacao para comunidades carentes; atuar em projetos e politicas sociais com entidades publicas e privadas; e produzir e divulgar informacoes tecnicas e cientificas relacionadas a suas atividades.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            { text: "Art. 5o. A associacao sera mantida por meio de:" },
          ],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Contribuicoes mensais dos associados (mensalidades)." }],
            [{ text: "II - Doacoes." }],
            [{ text: "III - Juros e alugueis." }],
            [
              {
                text: "IV - Qualquer outro meio nao vedado em lei e que nao contrarie a finalidade fundamental definida no Art. 4o.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 6o. O patrimonio da entidade sera constituido pelos bens existentes e os que vierem a ser incorporados ou adquiridos por compra, doacao, contribuicao, auxilios e subvencoes.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafo unico: A entidade podera ser dissolvida quando constatada impossibilidade de sobrevivencia por desvirtuamento de finalidades ou carencia de recursos financeiros e humanos, por deliberacao de Assembleia Geral especialmente convocada. Em caso de dissolucao, os bens dos GAVIOES DA FIEL serao destinados ao Sport Club Corinthians Paulista.",
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
          nodes: [{ text: "Capitulo II - Dos Associados" }],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 7o. A entidade e constituida por numero ilimitado de associados, com direitos e obrigacoes.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 8o. Categorias de associados:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Fundadores: os que participaram do ato constitutivo. Sao membros vitalicios e integram o Conselho Deliberativo, juntamente com ex-presidentes (Membros Cardeais).",
              },
            ],
            [
              {
                text: "II - Contribuintes: os que, devidamente propostos e aprovados pela diretoria, pagarem suas contribuicoes associativas.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafo unico: A inclusao de novos associados ocorrera por livre e espontanea vontade, sem distincao de raca, religiao ou nacionalidade, mediante preenchimento de formulario, comprovante de residencia, copia de RG e CPF e duas fotos 3x4, com compromisso de participar de reunioes periodicas e observar os principios LEALDADE, HUMILDADE e PROCEDIMENTO.",
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
          nodes: [
            { text: "Capitulo III - Dos Direitos e Obrigacoes dos Associados" },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 9o. Sao direitos dos associados:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Frequentar a sede nos horarios estabelecidos." }],
            [
              {
                text: "II - Participar e votar nas Assembleias Gerais, cumpridas as exigencias estatutarias.",
              },
            ],
            [
              {
                text: "III - Beneficiar-se dos servicos e atividades culturais, sociais, esportivas, civicas e filantropicas.",
              },
            ],
            [{ text: "IV - Desligar-se do quadro associativo mediante pedido escrito." }],
            [{ text: "V - Promover palestras de interesse coletivo." }],
            [
              {
                text: "VI - Representar, por escrito, a Diretoria Executiva sobre irregularidades ou sugestoes de interesse dos associados.",
              },
            ],
            [{ text: "VII - Licenciar-se da entidade, conforme previsao estatutaria." }],
            [
              {
                text: "VIII - Ser eleito para Presidencia da Diretoria Executiva somente com no minimo 26 anos de idade e 10 anos de associado, observados os demais criterios.",
              },
            ],
            [
              {
                text: "IX - Ser eleito para o Conselho Deliberativo somente com no minimo 20 anos de idade e 4 anos de associado, observados os demais criterios.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 10o. Sao obrigacoes dos associados:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Colaborar eficientemente para a realizacao dos objetivos da entidade.",
              },
            ],
            [
              {
                text: "II - Pagar tempestivamente contribuicoes sociais e quaisquer debitos perante a entidade.",
              },
            ],
            [
              {
                text: "III - Exibir carteira social para frequentar a sede, com a devida quitacao de mensalidade.",
              },
            ],
            [
              {
                text: "IV - Desempenhar com diligencia os encargos ou comissoes para os quais for escolhido.",
              },
            ],
            [
              {
                text: "V - Prestar esclarecimentos a Diretoria Executiva, Conselho Deliberativo e Assembleia Geral quando requisitado.",
              },
            ],
            [
              {
                text: "VI - Tratar com respeito os demais associados e funcionarios do GAVIOES DA FIEL.",
              },
            ],
            [{ text: "VII - Zelar pelo patrimonio." }],
          ],
        },
      ],
    },
    {
      type: "richText",
      content: [
        {
          kind: "subheading",
          nodes: [{ text: "Capitulo IV - Dos Poderes" }],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 11o. Sao poderes da entidade:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Assembleia Geral." }],
            [{ text: "II - Conselho Deliberativo." }],
            [{ text: "III - Diretoria Executiva." }],
            [{ text: "IV - Conselho Fiscal." }],
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 12o. Assembleia Geral:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - E o orgao soberano pelo qual os associados, por votacao, decidem as materias apresentadas, com aprovacao pela maioria dos presentes.",
              },
            ],
            [
              {
                text: "II - Para dissolucao, exige-se quorum especial de 3/4 dos associados presentes, com confirmacao em outra reuniao 15 dias depois.",
              },
            ],
            [
              {
                text: "III - Convocacoes serao feitas pelo presidente do Conselho Deliberativo ou por 1/5 dos associados, com ampla divulgacao e antecedencia de 30 dias.",
              },
            ],
            [
              {
                text: "IV - Realiza-se ordinariamente a cada 3 anos, na segunda quinzena de marco, ou extraordinariamente quando convocada.",
              },
            ],
            [
              {
                text: "V - E constituida por associados em dia com deveres estatutarios, com no minimo 16 anos de idade e admitidos ao menos 2 anos antes da data.",
              },
            ],
            [
              {
                text: "VI - O presidente do Conselho Deliberativo (ou substituto legal) conduz os trabalhos e medidas para regularidade do processo eleitoral ou deliberativo.",
              },
            ],
            [{ text: "VII - Um secretario indicado lavrara a ata." }],
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 13o. Compete a Assembleia Geral:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Eleger presidente e vice-presidente da Diretoria Executiva e eleger membros do Conselho Deliberativo.",
              },
            ],
            [
              {
                text: "II - Destituir administradores e membros das administracoes, em hipoteses graves previstas no estatuto e comprovadas em procedimento disciplinar.",
              },
            ],
            [{ text: "III - Aprovar as contas." }],
            [{ text: "IV - Alterar o Estatuto." }],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafos do Art. 13o: a destituicao nao atinge membros vitalicios e benemeritos do Conselho Deliberativo; para deliberacoes especificas aplicam-se quoruns de maioria simples ou de 2/3, conforme o caso, em assembleia especialmente convocada.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 14o. O Conselho Deliberativo constitui-se de membros vitalicios, benemeritos, eleitos/trienais, cardeais e suplentes, com regras de composicao, mandato, elegibilidade, vacancia e funcionamento conforme os paragrafos do artigo.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Destaques do Art. 14o: 20 membros trienais eleitos; membros vitalicios e cardeais com regras proprias; inscricao de candidaturas com antecedencia; possibilidade de impugnacao e recurso; limite de votos por associado; criterios de perda de mandato por faltas; e eleicao da mesa do Conselho Deliberativo para mandato de 3 anos.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 15o. Diretoria Executiva: orgao administrativo composto por presidente, vice-presidente, primeiro e segundo secretario, primeiro e segundo tesoureiro; mandato inicia em abril e coincide com o da mesa do Conselho Deliberativo.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafo unico do Art. 15o: candidatos a presidente e vice devem inscrever chapa pessoalmente na secretaria ate 30 dias antes das eleicoes, com documentos exigidos para analise e homologacao.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 16o. Compete a Diretoria Executiva:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Dirigir o Gremio de acordo com regulamento interno." }],
            [{ text: "II - Administrar o patrimonio social." }],
            [
              {
                text: "III - Organizar orcamentos anuais, com estimativas de receitas e despesas, consultando o Conselho Fiscal.",
              },
            ],
            [{ text: "IV - Resolver sobre admissao e demissao de associados." }],
            [
              {
                text: "V - Assinar contratos e locacoes com responsabilidades financeiras com no minimo 2 assinaturas.",
              },
            ],
            [{ text: "VI - Representar ao Conselho Deliberativo quando requisitado." }],
            [
              {
                text: "VII - Adquirir material representativo para revenda aos associados, mediante concorrencia.",
              },
            ],
            [{ text: "VIII - Aplicar penalidades do regimento interno." }],
            [{ text: "IX - Constituir comissoes e grupos de trabalho." }],
            [
              {
                text: "X - Determinar taxas, contribuicoes, mensalidades e precos de materiais que simbolizem a entidade.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 17o. Compete ao Presidente da Diretoria:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Representar o GAVIOES DA FIEL ativa e passivamente, judicial e extrajudicialmente.",
              },
            ],
            [{ text: "II - Convocar e presidir reunioes da diretoria." }],
            [{ text: "III - Proferir voto de qualidade em caso de empate." }],
            [
              {
                text: "IV - Assinar, com tesoureiro ou substituto, documentos financeiros, cheques e contratos.",
              },
            ],
            [
              {
                text: "V - Admitir, dispensar e punir empregados, fixar vencimentos e conceder licencas conforme lei.",
              },
            ],
            [
              {
                text: "VI - Nomear e dispensar membros da diretoria (secretarios e tesoureiros), com ratificacao em Assembleia Geral subsequente.",
              },
            ],
            [{ text: "VII - Divulgar a doutrina e o pensamento da entidade." }],
            [{ text: "VIII - Frequentar a sede com assiduidade." }],
            [{ text: "IX - Assinar a correspondencia da entidade." }],
            [
              {
                text: "X - Adotar providencias de urgencia e submete-las a diretoria ou orgao competente.",
              },
            ],
            [
              {
                text: "XI - Escolher a Diretoria da Escola de Samba, homologada pelo Conselho Deliberativo.",
              },
            ],
            [
              {
                text: "XII - Responder direta e pessoalmente por despesas autorizadas em desacordo com o estatuto e por atitudes perante a sociedade.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 18o. Compete ao Vice-presidente colaborar com o presidente, substitui-lo nos impedimentos, sucede-lo na vacancia e desempenhar funcoes determinadas.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 19o. Compete ao Primeiro Secretario:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Redigir correspondencias, oficios e editais." }],
            [{ text: "II - Elaborar atas das reunioes da diretoria." }],
            [{ text: "III - Elaborar relatorio anual de atividades." }],
            [
              {
                text: "IV - Supervisionar servicos administrativos e manter o arquivo sob guarda.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 20o. Compete ao Segundo Secretario auxiliar o primeiro secretario, substitui-lo nos impedimentos e sucede-lo na vacancia.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 21o. Compete ao Primeiro Tesoureiro:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Organizar e dirigir a tesouraria." }],
            [{ text: "II - Apresentar balancos mensais e anual a diretoria." }],
            [
              {
                text: "III - Recolher valores da entidade as instituicoes financeiras designadas.",
              },
            ],
            [
              {
                text: "IV - Assinar com o presidente cheques e outros documentos financeiros, efetuando pagamentos e recebimentos autorizados.",
              },
            ],
            [
              {
                text: "V - Lancar despesas e receitas com clareza, justificando quando requisitado e apresentando comprovantes.",
              },
            ],
            [{ text: "VI - Representar ao Conselho Fiscal quando requisitado." }],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 22o. Compete ao Segundo Tesoureiro auxiliar o primeiro tesoureiro, substitui-lo nos impedimentos, sucede-lo na vacancia e executar atribuicoes delegadas.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 23o. Conselho Fiscal:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Sera eleito pelo Conselho Deliberativo, simultaneamente com a Diretoria Executiva." }],
            [{ text: "II - Sera composto de 3 membros efetivos e 3 suplentes." }],
            [{ text: "III - Mandato de 3 anos, coincidindo com o da Diretoria Executiva." }],
            [
              {
                text: "IV - Suplentes serao convocados em vacancia ou licenca do titular, observada ordem da chapa.",
              },
            ],
            [
              {
                text: "V - Todos os membros do Conselho Fiscal devem pertencer ao Conselho Deliberativo.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 24o. Compete ao Conselho Fiscal:" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "I - Examinar a contabilidade e a aplicacao dos recursos financeiros da entidade.",
              },
            ],
            [
              {
                text: "II - Dar parecer sobre balancos mensal e anual, atos financeiros da diretoria e proposta orcamentaria do exercicio seguinte.",
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
          nodes: [{ text: "Capitulo V - Das Penalidades" }],
        },
        {
          kind: "paragraph",
          nodes: [{ text: "Art. 25o. Penalidades aos associados:" }],
        },
        {
          kind: "list",
          items: [
            [{ text: "I - Advertencia verbal ou por escrito, nos casos de infracoes leves." }],
            [
              {
                text: "II - Suspensao quando houver reincidencia, atos contra o conceito da entidade, semeadura de discordia/indisciplina, desrespeito a orgaos internos ou conduta inconveniente na sede e perante orgaos publicos.",
              },
            ],
            [
              {
                text: "III - Exclusao quando houver insurgencia contra os principios da entidade ou reincidencia nos casos de suspensao.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 26o. Competencia para aplicar penas: a Diretoria Executiva aplica advertencia e suspensao; o Conselho Deliberativo aplica exclusao.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 27o. Recursos: ao Conselho Deliberativo contra advertencia e suspensao; a Assembleia Geral contra exclusao; em ambos os casos, recurso escrito em ate 3 dias da comunicacao.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 28o. Direito de defesa: garante-se ampla defesa e devido processo legal, com audiencia especifica e possibilidade de sustentacao oral; admite-se suspensao preventiva pela Diretoria Executiva quando cabivel.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 29o. Procedimento para destituicao de administradores: notificacao extrajudicial para defesa previa em 20 dias; apos prazo, submissao a Assembleia Geral Extraordinaria, com quorum qualificado de 2/3 dos presentes, assegurado amplo direito de defesa.",
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
          nodes: [{ text: "Capitulo VI - Da Renuncia dos Administradores" }],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 30o. Em caso de renuncia de membro da Diretoria Executiva ou Conselho Fiscal, o cargo sera preenchido pelos suplentes.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Paragrafo primeiro: o pedido de renuncia sera escrito e protocolado na secretaria da associacao, que devera submete-lo a deliberacao da Assembleia Geral em ate 60 dias.",
            },
          ],
        },
        {
          kind: "paragraph",
          nodes: [
            {
              text: "Art. 31o. Na renuncia coletiva da diretoria e conselho fiscal, podera ser convocada Assembleia Geral Extraordinaria para eleicao de comissao provisoria de 5 membros, que administrara a entidade e realizara novas eleicoes em ate 60 dias, completando-se os mandatos em curso.",
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
          nodes: [{ text: "Capitulo VII - Disposicoes Gerais" }],
        },
        {
          kind: "list",
          items: [
            [
              {
                text: "Art. 32o. O ano financeiro do GAVIOES DA FIEL inicia em 01 de abril e termina em 31 de marco do ano seguinte.",
              },
            ],
            [
              {
                text: "Art. 33o. Mandatos do Conselho Deliberativo, Conselho Fiscal e Diretoria Executiva sao de 3 anos.",
              },
            ],
            [
              {
                text: "Art. 34o. Membros do Conselho Deliberativo, Conselho Fiscal e Diretoria Executiva nao sao remunerados.",
              },
            ],
            [
              {
                text: "Art. 35o. Para presidencia da diretoria, exige-se dois mandatos de conselheiro ou um completo e um em andamento.",
              },
            ],
            [
              {
                text: "Art. 36o. Despesas nao poderao exceder receitas, salvo condicoes especiais de interesse da entidade com aval do Conselho Deliberativo.",
              },
            ],
            [
              {
                text: "Art. 37o. Mediante decisao do Conselho Deliberativo, a entidade pode participar de eventos culturais, esportivos e sociais, sem desviar do objetivo social de celebrar o corinthianismo.",
              },
            ],
            [
              {
                text: "Art. 38o. Menores de 18 anos podem ingressar no quadro associativo com autorizacao de responsavel, gozando das prerrogativas estatutarias.",
              },
            ],
            [
              {
                text: "Art. 39o. O associado deve cumprir a Lei Federal 12.299/10 (Estatuto do Torcedor), respondendo por seus atos; a entidade fica isenta por descumprimento individual.",
              },
            ],
            [
              {
                text: "Paragrafos do Art. 39o: em caso de responsabilizacao subsidiaria da agremiacao por ato do associado, podera haver expulsao, respeitado o estatuto; a agremiacao nao se responsabiliza civil ou criminalmente por atitudes isoladas e pessoais dos associados.",
              },
            ],
            [
              {
                text: "Art. 40o. O presidente da Diretoria Executiva podera ser reeleito por apenas mais um mandato, podendo voltar a candidatar-se ao mesmo cargo apos o transcurso de ao menos 3 anos.",
              },
            ],
            [{ text: "Art. 41o. Compete ao Conselho Deliberativo julgar casos omissos." }],
            [
              {
                text: "Art. 42o. Norma geral de respeito a todas as co-irmas, sejam torcidas organizadas ou escolas de samba.",
              },
            ],
            [
              {
                text: "Paragrafo unico do Art. 42o: este estatuto entrara em vigor apos aprovacao da Assembleia Geral e cumprimento das formalidades legais, revogadas as disposicoes em contrario.",
              },
            ],
          ],
        },
      ],
    },
    {
      type: "sources",
      title: "Fonte e download",
      items: [
        {
          label: "Estatuto oficial - acervo Gavioes da Fiel (Google Drive)",
          href: estatutoDownloadLink,
        },
      ],
    },
  ],
};
