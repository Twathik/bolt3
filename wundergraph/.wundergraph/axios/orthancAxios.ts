import axios from "axios";

export const orthancAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://orthanc:8042"
      : "http://localhost:8042",
  auth: { password: "admin", username: "admin" },
});
