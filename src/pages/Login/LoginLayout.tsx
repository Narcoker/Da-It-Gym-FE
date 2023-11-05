import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";

function LoginLayout() {
  const location = useLocation();
  const [chat, setChat] = useState(false);
  useEffect(() => {
    if (location.pathname.startsWith("/chat")) {
      setChat(true);
    } else {
      setChat(false);
    }
  }, [location.pathname]);
  return (
    <>
      <Nav type="top" />
      <Outlet />
      {chat ? <Nav type="chat" /> : <Nav type="home" />}
    </>
  );
}

export default LoginLayout;
