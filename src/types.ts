export interface SignUpInterface {
  setLoginTab: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}
