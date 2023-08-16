export interface LabelInputType {
  title: string;
  id: string;
  inputValue: string;
  inputType: "text" | "password";
  inputFocus: string;
  focusHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
