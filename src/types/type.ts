import React from "react";

export interface IFireBaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

export interface Iprops {
  isLoggedIn: boolean;
}

export type TFormEvent = React.FormEvent<HTMLFormElement>;
export type TChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
