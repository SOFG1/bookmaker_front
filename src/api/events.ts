import { axiosInstance } from ".";

export const eventsApi = {
  getEvents() {
    return axiosInstance.get("/events");
  },
};
