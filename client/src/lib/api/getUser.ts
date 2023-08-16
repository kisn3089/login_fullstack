import { LoginType } from "@/types/login.type";
import { axiosInstance } from "../util/axios";

export const getUser = async ({ email, password }: LoginType) => {
  return await axiosInstance
    .post("/login", { email: email, pw: password })
    .then((res) => res.data);
};
