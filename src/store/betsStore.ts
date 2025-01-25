import { makeAutoObservable } from "mobx";
import { ticketStore } from "./ticketStore";
import { betsApi } from "../api/bets";
import { EventOddType, eventsStore } from "./eventsStore";
import { userStore } from "./userStore";
import { toast } from "react-toastify";

export interface IBetEvent {
  _id: string;
  title: string;
  date: string;
  eventId: string;
  odd: number;
  place: EventOddType;
}

export interface IBet {
  _id: string;
  amount: number;
  status: "active" | "won" | "lost"
  odd: number;
  win: number;
  events: IBetEvent[];
  user: string;
  finishDate: string;
  createdAt: string;
}

class BetsStore {
  bets: IBet[] = [];
  isFetching: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getBets() {
    try {
      this.isFetching = true;
      const { data } = await betsApi.getBets();
      this.bets = data.data;
    } catch (e) {
    } finally {
      this.isFetching = false;
    }
  }

  async createBet(amount: number) {
    try {
      this.isFetching = true;
      const events = ticketStore.events.map((e) => {
        const odd = eventsStore.getEventOdd(e.eventId, e.place) || 1;
        return { ...e, odd };
      });
      const { data } = await betsApi.createBet(amount, events);
      if (data.message === "odds_changed") {
        console.log(data)
        eventsStore.updateEvents(data.data.map((d: any) => d.event));
      }
      if (data.message === "success") {
        ticketStore.events = [];
        userStore.user = data.data.user;
        betsStore.bets.unshift(data.data.bet);
        toast("Success", { type: "success" });
      }
      return data;
    } catch (e: any) {
      e.response?.data?.forEach((m: string) => toast(m, { type: "error" }));
    } finally {
      this.isFetching = false;
    }
  }
}

export const betsStore = new BetsStore();
