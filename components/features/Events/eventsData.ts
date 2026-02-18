export type UpcomingEvent = {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  venue: string;
  time: string;
};

export type EventGroup = {
  id: string;
  category: string;
  events: UpcomingEvent[];
};

export const eventsTitle = "Próximos Eventos";

const buildEvents = (prefix: string): UpcomingEvent[] =>
  Array.from({ length: 5 }, (_, index) => ({
    id: `${prefix}_event_${index + 1}`,
    date: "21/02",
    homeTeam: "Corinthians",
    awayTeam: "Porcada",
    homeTeamLogo: "/corinthians.svg",
    awayTeamLogo: "/palmeiras.png",
    venue: "Arena Corinthians",
    time: "21h30",
  }));

export const eventGroups: EventGroup[] = [
  {
    id: "events_masculino",
    category: "Futebol Masculino",
    events: buildEvents("masculino"),
  },
  {
    id: "events_feminino",
    category: "Futebol Feminino",
    events: buildEvents("feminino"),
  },
  {
    id: "events_basquete",
    category: "Basquete",
    events: buildEvents("basquete"),
  },
];
