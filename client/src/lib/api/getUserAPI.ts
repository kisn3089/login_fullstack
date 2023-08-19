import { LoginType } from "@/types/login.type";
import { axiosInstance } from "../util/axios";

export const loginAPI = async ({ email, password }: LoginType) => {
  return await axiosInstance
    .post("/login", { email: email, password: password })
    .then((res) => res.data);
};
