import New from "./pages/New/New";
import { Route, Routes } from "react-router";
import UISample from "./pages/UISample/UISample";
import * as S from "./App.style";
import MyPage from "./pages/MyPage/MyPage";
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
import Nav from "./components/Nav/Nav";
import Chat from "./pages/Chat/Chat";
import ChatSearchUser from "./pages/ChatSearchUser/ChatSearchUser";
import ChatRooms from "./pages/ChatRooms/ChatRooms";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <S.Layout>
      <S.AppWrapper>
        <Nav type="top" />
        <Nav type="home" />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/ui-sample" element={<UISample />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/diary" element={<ExerciseDiary />} />
          <Route path="/feed/diary" element={<FeedDiary />} />
          <Route path="/feed/routine" element={<FeedRoutine />} />
          <Route path="/feed/routine/new" element={<FeedNewRoutine />} />
          <Route path="/feed/diary/:id" element={<FeedDiaryDetail />} />
          <Route path="/feed/routine/:id" element={<FeedRoutineDetail />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/feed/search-user" element={<SearchUser />} />
          <Route path="/feed/import/:id" element={<FeedImport />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/chat/search/user" element={<ChatSearchUser />} />
          <Route path="/chat/rooms" element={<ChatRooms />} />
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
