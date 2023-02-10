import { ReactNode } from "react";

export interface IContextProps {
  children: ReactNode;
}

export interface IClientUpdate {
  email: string;
  password?: string;
  fullName: string;
  phone: string;
}

export interface IClientData extends IClientUpdate {
  password: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientLoginResponse {
  token: string;
}

export interface IContact {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IClient extends IContact {
  isActive: boolean;
  contacts: IContact[];
}
