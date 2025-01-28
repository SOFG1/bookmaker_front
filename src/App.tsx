import { ToastContainer } from "react-toastify";
import { Header } from "./components/common/Header";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./store";
import { userStore } from "./store/userStore";
import { EmailVerificationModal } from "./components/common/EmailVerificationModal";
import { observer } from "mobx-react-lite";

function App() {
  console.log(userStore.user)
  return (
    <BrowserRouter>
      <ToastContainer />
      {userStore?.user?.verification === false && <EmailVerificationModal />}
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
