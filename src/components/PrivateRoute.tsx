import React, { useEffect } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
}

export default function PrivateRoute({ authenticated, element }: PrivateRouteProps) {
  const alreadyJoined = localStorage.getItem("alreadyJoined");
  useEffect(() => {
    if (!authenticated) {
      //   alert("로그인 후 이용해 주세요");
      localStorage.removeItem("accessToken");
    } else {
      // 🔥API
      // requestUserInfo();
    }
  }, []);
  return authenticated ? (
    !alreadyJoined ? (
      <Navigate to="/signup" />
    ) : (
      element
    )
  ) : (
    <Navigate to="/login" />
  );
}
