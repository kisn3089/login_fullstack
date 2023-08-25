import { LoginType } from "./login.type";

export interface CreateUserType extends LoginType {
  name: string;
  confirmPassword: string;
}
