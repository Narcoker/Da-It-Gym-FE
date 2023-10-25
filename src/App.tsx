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

function App() {
  return (
    <S.Layout>
      <S.AppWrapper>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/ui-sample" element={<UISample />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/diary" element={<ExerciseDiary />} />
          <Route path="/feed/diary" element={<FeedDiary />} />
          <Route path="/feed/routine" element={<FeedRoutine />} />
          <Route path="/feed/diary/:id" element={<FeedDiaryDetail />} />
          <Route path="/feed/routine/:id" element={<FeedRoutineDetail />} />
        </Routes>
      </S.AppWrapper>
    </S.Layout>
  );
}

export default App;
