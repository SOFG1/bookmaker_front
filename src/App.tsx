import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <MainPage />
    </>
  );
}

export default App;
