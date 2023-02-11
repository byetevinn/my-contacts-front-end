import { IContactData } from "../../contexts/interfaces";

export interface IModalContactProps {
  activateModal: boolean;
  setActiateModal: React.Dispatch<React.SetStateAction<boolean>>;
  contact: IContactData;
  id: string;
}
