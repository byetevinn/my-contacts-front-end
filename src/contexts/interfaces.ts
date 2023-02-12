import { ReactNode } from "react";

export interface IContextProps {
  children: ReactNode;
}

//INTERFACES CLIENTS

export interface IClient extends IContact {
  isActive: boolean;
  contacts: IContact[];
}

export interface IClientUpdate extends IContactData {
  password?: string;
}

export interface IClientData extends IContactData {
  password: string;
  confirm_password?: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientLoginResponse {
  token: string;
}

//INTERFACES CONTACTS

export interface IContact {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IContactData {
  email: string;
  fullName: string;
  phone: string;
}

export interface IContactUpdate extends IContactData {}
