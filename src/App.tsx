import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
