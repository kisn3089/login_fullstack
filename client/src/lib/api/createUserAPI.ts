import { axiosInstance } from "../util/axios";
import { CreateUserType } from "@/types/createUser.type";

export const createUserAPI = async ({
  name,
  email,
  password,
}: Omit<CreateUserType, "confirmPassword">) => {
  return await axiosInstance
    .post("/join", {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => res.data);
};
