import { ReactNode } from "react";

export interface IClientsContextProps {
  children: ReactNode;
}

export interface IClientData {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientLoginResponse {
  token: string;
}

export interface IClientsContext {
  loginClient: (data: any) => void;
  registerClient: (data: any) => void;
}
