import React, { useEffect } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
}

export default function PrivateRoute({ authenticated, element }: PrivateRouteProps) {
  useEffect(() => {
    if (!authenticated) {
      //   alert("로그인 후 이용해 주세요");
      localStorage.removeItem("accessToken");
    } else {
      // 🔥API
      // requestUserInfo();
    }
  }, []);
  return !authenticated ? element : <Navigate to="/login" />;
}
