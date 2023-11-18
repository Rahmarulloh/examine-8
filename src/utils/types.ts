export namespace AuthUser {
  export type ILogin = {
    onChangeName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onLogin?: (event: React.FormEvent) => void;
  };
}

export type TUser = {
  name: string;
  password: string;
};
