import React from "react";
import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.islogin);
  return (
    <React.Fragment>
      <Headers></Headers>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </React.Fragment>
  );
}

export default App;
