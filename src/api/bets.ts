import { axiosInstance } from "."
import { TicketEvent } from "../store/ticketStore"

interface BetEvent extends TicketEvent {
    odd: number
}

export const betsApi = {
    createBet(amount: number, events: BetEvent[]) {
        return axiosInstance.post("bets", {amount, events})
    }
}