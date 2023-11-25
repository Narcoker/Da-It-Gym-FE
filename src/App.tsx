import New from "./pages/New/New";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import * as S from "./App.style";
import Profile from "./pages/Profile/Profile";
import ExerciseDiary from "./pages/ExerciseDiary/ExerciseDiary";
import FeedDiary from "./pages/FeedDiary/FeedDiary";
import FeedRoutine from "./pages/FeedRoutine/FeedRoutine";
import FeedDiaryDetail from "./pages/FeedDiaryDetail/FeedDiaryDetail";
import FeedRoutineDetail from "./pages/FeedRoutineDetail/FeedRoutineDetail";
import EditProfile from "./pages/EditProfile/EditProfile";
import SearchUser from "./pages/SearchUesr/SearchUser";
import FeedImport from "./pages/FeedImport/FeedImport";
import FeedNewRoutine from "./pages/FeedNewRoutine/FeedNewRoutine";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat/Chat";
import ChatSearchUser from "./pages/ChatSearchUser/ChatSearchUser";
import ChatRooms from "./pages/ChatRooms/ChatRooms";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import LoginLayout from "./pages/Login/LoginLayout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import FeedDiaryShare from "./pages/FeedDiaryShare/FeedDiaryShare";
import Admin from "./pages/Admin/Admin";
import LoginLoading from "./pages/LoginLoading/LoginLoading";
import Recovery from "./pages/Recovery/Recovery";
import { useRecoilValue } from "recoil";
import { userInfoState } from "./recoil/userInfoState";
import UserRecommend from "./pages/UserRecommend/UserRecommend";
import CustomerCenter from "./pages/CustomerCenter/CustomerCenter";
import firebase from "firebase/compat/app";
import { onMessage } from "firebase/messaging";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// const analytics = getAnalytics(app);

// .then(function () {
//   console.log("허가!");
//   return messaging.getToken(); //토큰을 받는 함수를 추가!
// })
// .then(function (token) {
//   console.log(token); //토큰을 출력!
// })
// .catch(function (err) {
//   console.log("fcm에러 : ", err);
// });
const firebaseConfig = {
  apiKey: "AIzaSyCtBI1WgFnKleFr4JDati_fg1O4hlVeg3U",
  authDomain: "daitgym.firebaseapp.com",
  projectId: "daitgym",
  storageBucket: "daitgym.appspot.com",
  messagingSenderId: "951645079216",
  appId: "1:951645079216:web:1cdd81bf9aa6c3355b5d75",
  measurementId: "G-T1N80KD5X8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// const { requestPostFCMToken } = useUserAPI();

function App() {
  Notification.requestPermission()
    .then((PermissionStatus) => {
      if (PermissionStatus === "granted") {
        messaging
          .getToken({ vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
          .then((token: string) => {
            console.log(`허가! 토큰값 :${token}`);
            // requestPostFCMToken(token);
            localStorage.setItem("FCMToken", token);
          })
          .catch((err) => console.log("토큰 가져오는 중에 에러", err));

        return messaging.getToken();
      } else if (PermissionStatus === "denied") {
        // alert("알림 권한 거부됨");
      } else {
        console.log("알림 권한 차단됨", Permissions);
      }
    })
    .catch((err) => {
      console.log("FCM 오류", err);
    });
  onMessage(messaging, (payload) => {
    const notificationTitle = payload.notification?.title;
    const notificationOptions = {
      body: payload.notification?.body,
    };

    // 사용자에게 알림을 표시
    // @ts-ignore
    const notification = new Notification(notificationTitle, notificationOptions);
  });

  const LoginRoutes = [
    { path: "/", element: <New /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile/:nickname", element: <Profile /> },
    { path: "/diary", element: <ExerciseDiary /> },
    { path: "/feed/diary", element: <FeedDiary /> },
    { path: "/feed/diary/share", element: <FeedDiaryShare /> },
    { path: "/feed/routine", element: <FeedRoutine /> },
    { path: "/feed/routine/new", element: <FeedNewRoutine /> },
    { path: "/feed/diary/:id", element: <FeedDiaryDetail /> },
    { path: "/feed/routine/:routineId", element: <FeedRoutineDetail /> },
    { path: "/profile/edit", element: <EditProfile /> },
    { path: "/feed/search-user", element: <SearchUser /> },
    { path: "/feed/import", element: <FeedImport /> },
    { path: "/chat/:chatId", element: <Chat /> },
    { path: "/chat/search/user", element: <ChatSearchUser /> },
    { path: "/chat/rooms", element: <ChatRooms /> },
    { path: "/help", element: <CustomerCenter /> },
    { path: "/admin", element: <Admin /> },
    { path: "/user/recommend", element: <UserRecommend /> },
  ];
  const LogOutRoutes = [
    { path: "/login", element: <Login /> },
    // { path: "/login/oauth2/callback/kakao", element: <LoginLoading /> },
    { path: "/account/recovery", element: <Recovery /> },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  // const alreadyJoined = localStorage.getItem("alreadyJoined");
  const token = localStorage.getItem("accessToken");
  const auth = token != null;
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(auth ? `/profile/${userInfo.nickname}?section=routines` : "login");
    }
    // else if (location.pathname === "/login") {
    //   navigate(auth ? `/profile/${userInfo.nickname}` : "login");
    // }
  }, [location.pathname]);
  return (
    <S.Layout>
      <S.AppWrapper>
        <Routes>
          {LogOutRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PublicRoute authenticated={auth} element={element} />}
            />
          ))}
          <Route path="/login/oauth2/callback/kakao" element={<LoginLoading />} />
          {LoginRoutes.map(({ path, element }) => (
            <>
              <Route element={location.pathname !== "/signup" && <LoginLayout />}>
                <Route
                  key={path}
                  path={path}
                  element={<PrivateRoute authenticated={auth} element={element} />}
                />
              </Route>
            </>
          ))}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </S.AppWrapper>
    </S.Layout>
  );
}

export default App;
