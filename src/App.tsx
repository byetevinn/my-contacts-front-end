import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ClientsProvider from "./contexts/clientsContext";
import RoutesMain from "./routes";

function App() {
  return (
    <ClientsProvider>
      <ToastContainer />
      <RoutesMain />
    </ClientsProvider>
  );
}

export default App;
