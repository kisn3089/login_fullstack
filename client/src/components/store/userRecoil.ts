import { atom } from "recoil";

type user = {
  email: string;
  userName: string;
  createAt: string;
};

const defaultUser = {
  email: "",
  userName: "",
  createAt: "",
};

export const userRecoil = atom<user>({
  key: "userRecoilState",
  default: defaultUser,
});
