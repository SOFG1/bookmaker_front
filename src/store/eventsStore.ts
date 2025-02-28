import { makeAutoObservable } from "mobx";
import { eventsApi } from "../api/events";

export type EventOddType = "win1" | "win2" | "draw";

export interface IEvent {
  id: string;
  title: string;
  home_team: string;
  away_team: string;
  commence_time: string;
  odds: {
    [key in EventOddType]: number;
  };
}

function convertData(d: any[]): IEvent[] {
  return d.map((e: any) => {
    const obj: Partial<IEvent> = {};
    obj.id = e.id;
    obj.title = `${e.home_team} - ${e.away_team}`;
    obj.home_team = e.home_team;
    obj.away_team = e.away_team;
    obj.commence_time = e.commence_time;
    const pinnacle = e.bookmakers.find((b: any) => b.key === "pinnacle");
    const outcomes = pinnacle?.markets?.find(
      (m: any) => m.key === "h2h"
    ).outcomes;
    const winHome = outcomes?.find((o: any) => o.name === e.home_team)?.price;
    const winAway = outcomes?.find((o: any) => o.name === e.away_team)?.price;
    const draw = outcomes?.find((o: any) => o.name === "Draw")?.price;
    obj.odds = {
      win1: winHome || 0,
      win2: winAway || 0,
      draw: draw || 0,
    };
    return obj as IEvent;
  });
}

class EventsStore {
  events: IEvent[] = [];
  isFetching: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getEvents() {
    try {
      this.isFetching = true;
      const { data } = await eventsApi.getEvents();
      this.events = convertData(data);
    } catch (e) {
    } finally {
      this.isFetching = false;
    }
  }

  getEventOdd(id: string, odd: EventOddType) {
    const ev = this.events.find((e) => e.id === id);
    return ev?.odds[odd];
  }

  updateEvents(data: any[]) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const index = this.events.findIndex((ev) => ev.id === item.id);
      this.events[index].odds[item.place as EventOddType] = item.odd;
    }
  }
}

export const eventsStore = new EventsStore();
