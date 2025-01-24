import { makeAutoObservable } from "mobx";
import { TicketEvent, ticketStore } from "./ticketStore";
import { betsApi } from "../api/bets";
import { eventsStore } from "./eventsStore";
import { userStore } from "./userStore";
import { toast } from "react-toastify";

export interface IBet {
    amount: number
    events: TicketEvent
    date: string
}

class BetsStore {
  bets: IBet[] = [];
  isFetching: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }


  async createBet(amount: number) {
    this.isFetching = true
    try {
        const events = ticketStore.events.map(e => {
            const odd  = eventsStore.getEventOdd(e.eventId, e.place) || 1
            return {...e, odd}
        })
        const {data} = await betsApi.createBet(amount, events)
        if(data.message === "odds_changed") {
            eventsStore.updateEvents(data.data)
        }
        if(data.message === "success") {
            ticketStore.events = []
            userStore.user = data.data.user
            toast("Success", {type: "success"})
        }
        return data
    } catch(e) {
        console.log(e)
    } finally {
        this.isFetching = false
    }
  }

}

export const betsStore = new BetsStore();
