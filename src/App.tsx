import { ToastContainer } from "react-toastify";
import { Header } from "./components/common/Header";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./store"

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
