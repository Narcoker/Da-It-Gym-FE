import "firebase/compat/messaging";
import { useEffect } from "react";
import { Navigate } from "react-router";
import { useUserAPI } from "../api/useUserAPI";
// import { useUserAPI } from "../api/useUserAPI";

interface PrivateRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
}

export default function PrivateRoute({ authenticated, element }: PrivateRouteProps) {
  const alreadyJoined = localStorage.getItem("alreadyJoined");
  const { requestPostFCMToken } = useUserAPI();
  useEffect(() => {
    if (!authenticated) {
      //   alert("로그인 후 이용해 주세요");
      localStorage.removeItem("accessToken");
    } else {
      // 🔥API
      // requestUserInfo();
      const FCMToken = localStorage.getItem("FCMToken");
      if (FCMToken) {
        requestPostFCMToken(FCMToken);
      }
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
