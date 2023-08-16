import { LabelInputType } from "../labelInput/type";

export interface FormType
  extends Pick<
    LabelInputType,
    "inputFocus" | "focusHandler" | "blurHandler" | "enterSubmit"
  > {
  type: "login" | "join";
  emailValue: string;
  pwValue: string;
  valueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
