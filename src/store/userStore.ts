import { makeAutoObservable } from "mobx";
import { userApi } from "../api/user";
import { toast } from "react-toastify";

export interface IUser {
  _id: string;
  email: string;
  balance: number;
}

class UserStore {
  user: IUser | null = JSON.parse(localStorage.getItem("user") || "null");
  token: string | null = localStorage.getItem("token")

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(user: IUser | null, token: string | null) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
    localStorage.setItem("token", JSON.stringify(token));
    this.token = token;
  }

  async signUp(email: string, password: string) {
    try {
      const { data } = await userApi.signUp(email, password);
      if (data) {
        this.setUserData(data.user, data.token);
      }
    } catch (e) {
      toast("Error occured", { type: "error" });
    }
  }
}

export const userStore = new UserStore();
