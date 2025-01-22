import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AccountPage } from "./pages/AccountPage";
import { userStore } from "./store/userStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const AppRouter = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(location.pathname === "/account" && !userStore.token) {
      navigate("/")
    }
  }, [location])

  return (
      <Routes>
        {userStore.token && <Route path="/account" element={<AccountPage />} />}
        <Route path="*" element={<MainPage />} />
      </Routes>
  );
});
