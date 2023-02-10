import { ToastContainer } from "react-toastify";

import ClientsProvider from "./contexts/clientsContext";
import RoutesMain from "./routes";
import Global from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ClientsProvider>
      <Global />
      <ToastContainer />
      <RoutesMain />
    </ClientsProvider>
  );
}

export default App;
