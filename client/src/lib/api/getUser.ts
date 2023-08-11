import { axiosInstance } from "../util/axios";

export const getUser = async ({ id, pw }: { id: string; pw: string }) => {
  return await axiosInstance
    .post("/login", { id: id, pw: pw })
    .then((res) => res.data);
};
