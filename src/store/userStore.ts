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
  token: string | null = JSON.parse(localStorage.getItem("token") || "null");

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  setUserData(user: IUser | null, token: string | null) {
    this.user = user;
    this.token = token;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
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

  async signIn(email: string, password: string) {
    try {
      const { data } = await userApi.signIn(email, password);
      if (data) {
        this.setUserData(data.user, data.token);
      }
    } catch (e) {
      toast("Error occured", { type: "error" });
    }
  }

  async checkAuth() {
    if (!this.token) return;
    try {
      const { data } = await userApi.checkAuth();
      this.setUserData(data.user, data.token);
    } catch (e) {
      this.setUserData(null, null);
      console.log(e);
    }
  }
}

export const userStore = new UserStore();
