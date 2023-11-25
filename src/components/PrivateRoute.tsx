import "firebase/compat/messaging";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useUserAPI } from "../api/useUserAPI";
// import { useUserAPI } from "../api/useUserAPI";

interface PrivateRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
  fcmToken: string;
}

export default function PrivateRoute({
  authenticated,
  element,
  fcmToken,
}: PrivateRouteProps) {
  const alreadyJoined = localStorage.getItem("alreadyJoined");
  const [dbFcmToken, setDbFcmToken] = useState(false);
  const { requestFCMToken, requestPostFCMToken, requestPatchFCMToken } = useUserAPI();
  console.log("dbFcmToken", dbFcmToken);
  useEffect(() => {
    if (!authenticated) {
      //   alert("로그인 후 이용해 주세요");
      localStorage.removeItem("accessToken");
    } else {
      // 🔥API
      // requestUserInfo();
      const requestFCM = async () => {
        await requestFCMToken(setDbFcmToken);
      };
      requestFCM();
    }
  }, [fcmToken]);

  useEffect(() => {
    console.log("DB에서 받아온 FCM값이 있는지?", dbFcmToken);
    if (authenticated) {
      const FCMToken = localStorage.getItem("FCMToken");
      if (FCMToken !== "" && fcmToken !== "" && FCMToken !== null && fcmToken !== null) {
        if (dbFcmToken) {
          requestPatchFCMToken(fcmToken);
        } else if (!dbFcmToken) {
          requestPostFCMToken(fcmToken);
          console.log("post보내는 fcmToken", fcmToken);
        }
        console.log("localStorage", fcmToken);
      }
    }
  }, [dbFcmToken]);

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
