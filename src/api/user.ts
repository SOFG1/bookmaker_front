import { axiosInstance } from ".";

export const userApi = {
  signUp(email: string, password: string) {
    return axiosInstance.post("/user/sign-up", { email, password });
  },
  signIn(email: string, password: string) {
    return axiosInstance.post("/user/sign-in", { email, password });
  },
  checkAuth() {
    return axiosInstance.get("/user/auth");
  },
  deleteAccount(password: string) {
    return axiosInstance.delete("/user/delete", { data: { password } });
  },
  topupBalance() {
    return axiosInstance.post("/user/topup");
  },
  verifyEmail(code: string) {
    return axiosInstance.post("/user/verify", {code});
  },
  deleteUnverifiedUser() {
    return axiosInstance.delete("/user/delete-unverified")
  }
};
