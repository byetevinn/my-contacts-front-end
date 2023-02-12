import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Global from "./styles/global";

import ClientsProvider from "./contexts/clientsContext";
import ContactsProvider from "./contexts/contactsContext";
import RoutesMain from "./routes";

function App() {
  return (
    <ClientsProvider>
      <ContactsProvider>
        <Global />
        <ToastContainer />
        <RoutesMain />
      </ContactsProvider>
    </ClientsProvider>
  );
}

export default App;
