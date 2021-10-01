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
  [key: string]: any;
}

export interface hoWitterInfoType {
  message: string;
  createAt: number;
  id: string;
  creatorId: string;
  attachmentUrl: string;
}

export interface howitterObjsType {
  key: string;
  howitterObj: hoWitterInfoType;
  isOwner: boolean;
}

export type TFormEvent = React.FormEvent<HTMLFormElement>;
export type TChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface FileReaderEvent extends ProgressEvent {
  currentTarget: any;
}

export interface AuthFormSubmitStyleProps {
  StateBackgroundColor?: boolean;
}
