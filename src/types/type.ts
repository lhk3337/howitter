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
  isLoggedIn?: boolean;
  userObj: any;
}

export interface IhowitterMessage {
  message: string;
  createAt: number;
  id: string;
}

export interface hoWitterInfo {
  id: string;
  createAt: number;
  creatorId: string;
  message: string;
}

export type TFormEvent = React.FormEvent<HTMLFormElement>;
export type TChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
