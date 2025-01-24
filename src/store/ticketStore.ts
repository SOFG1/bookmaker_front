import { makeAutoObservable } from "mobx";
import { EventOddType } from "./eventsStore";
import { MAX_ODD } from "../constants";

type TicketEvent = {
  eventId: string;
  place: EventOddType;
  odd: number;
};

class TicketStore {
  opened: boolean = false;
  events: TicketEvent[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get totalOdds() {
    let tot = this.events.reduce((a, c) => {
      return a * c.odd;
    }, 1);
    if (tot > MAX_ODD) tot = MAX_ODD;
    return Number(tot.toFixed(2));
  }

  setOpened(opened: boolean) {
    this.opened = opened;
  }

  addEvent(eventId: string, place: EventOddType, odd: number) {
    this.opened = true;
    const added = this.events.find((e) => e.eventId === eventId);
    if (!added) {
      this.events.push({ eventId, place, odd });
      return;
    }
    if (added && added.place === place) {
      this.removeEvent(eventId);
      return;
    }
    if (added && added.place !== place) {
      this.removeEvent(eventId);
      this.events.push({ eventId, place, odd });
      return;
    }
  }

  removeEvent(eventId: string) {
    this.opened = true;
    this.events = this.events.filter((e) => e.eventId !== eventId);
  }

  clear() {
    this.events = [];
  }
}

export const ticketStore = new TicketStore();
