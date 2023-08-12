import { axiosInstance } from "../util/axios";

export const getUser = async ({ email, pw }: { email: string; pw: string }) => {
  return await axiosInstance
    .post("/login", { email: email, pw: pw })
    .then((res) => res.data);
};
