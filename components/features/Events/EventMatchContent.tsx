import Image from "next/image";

import type { UpcomingEvent } from "./eventsData";

type EventMatchContentMode = "desktop" | "mobile";

type EventMatchContentProps = {
  event: UpcomingEvent;
  mode?: EventMatchContentMode;
};

type MatchClassConfig = {
  date: string;
  contentWrap: string;
  homeLogo: string;
  detailsWrap: string;
  teamsRow: string;
  teamName: string;
  separator: string;
  metaRow: string;
  venue: string;
  time: string;
  awayLogo: string;
};

const classByMode: Record<EventMatchContentMode, MatchClassConfig> = {
  desktop: {
    date: "w-11 shrink-0 text-sm font-semibold",
    contentWrap: "flex min-w-0 flex-1 items-center gap-3",
    homeLogo: "h-9 w-9 xl:h-10 xl:w-10",
    detailsWrap: "flex min-w-0 flex-1 flex-col gap-1",
    teamsRow: "flex items-center gap-1 xl:gap-2 justify-between w-full",
    teamName: "font-helvetica-condensed text-sm font-bold uppercase leading-none xl:text-base",
    separator: "font-helvetica-condensed text-sm font-bold uppercase leading-none xl:text-base",
    metaRow: "flex items-center justify-between gap-2",
    venue: "text-[11px] uppercase",
    time: "shrink-0 text-[11px]",
    awayLogo: "h-9 w-9 xl:h-10 xl:w-10",
  },
  mobile: {
    date: "w-12 shrink-0 text-sm font-semibold sm:w-14 sm:text-base",
    contentWrap: "flex min-w-0 flex-1 items-center gap-4 sm:gap-3",
    homeLogo: "h-9 w-9 sm:h-8 sm:w-8 lg:h-10 lg:w-10",
    detailsWrap: "flex min-w-0 flex-col gap-1 sm:flex-1",
    teamsRow: "flex min-w-0 items-center gap-2 justify-center sm:gap-2 lg:gap-3 w-full",
    teamName: "font-helvetica-condensed text-base font-bold uppercase leading-none sm:text-base lg:text-lg xl:text-xl",
    separator: "font-helvetica-condensed text-base font-bold uppercase leading-none sm:text-base lg:text-lg xl:text-xl",
    metaRow: "-mt-0.5 flex items-center gap-4 sm:w-full sm:justify-between sm:gap-2",
    venue: "truncate text-xs uppercase sm:text-xs",
    time: "shrink-0 text-xs sm:text-xs",
    awayLogo: "h-9 w-9 sm:h-8 sm:w-8 lg:ms-1 lg:h-9 lg:w-9",
  },
};

export function EventMatchContent({ event, mode = "mobile" }: EventMatchContentProps) {
  const classes = classByMode[mode];

  return (
    <>
      <p className={classes.date}>{event.date}</p>

      <div className={classes.contentWrap}>
        <Image src={event.homeTeamLogo} alt={event.homeTeam} width={64} height={64} className={classes.homeLogo} />

        <div className={classes.detailsWrap}>
          <div className={classes.teamsRow}>
            <h2 className={classes.teamName}>{event.homeTeam}</h2>
            <h2 className={classes.separator}>x</h2>
            <h2 className={classes.teamName}>{event.awayTeam}</h2>
          </div>

          <div className={classes.metaRow}>
            <p className={classes.venue}>{event.venue}</p>
            <p className={classes.time}>{event.time}</p>
          </div>
        </div>

        <Image src={event.awayTeamLogo} alt={event.awayTeam} width={64} height={64} className={classes.awayLogo} />
      </div>
    </>
  );
}
