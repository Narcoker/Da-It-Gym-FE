import New from "./pages/New/New";
import { Route, Routes } from "react-router";
import UISample from "./pages/UISample/UISample";
import IconTest from "./pages/IconTest/IconTest";
import * as S from "./App.style";

function App() {
  return (
    <S.Layout>
      <S.AppWrapper>
        <Routes>
          <Route path="/" element={<New />}></Route>
          <Route path="/ui-sample" element={<UISample />}></Route>
          <Route path="/icon-test" element={<IconTest />}></Route>
        </Routes>
      </S.AppWrapper>
    </S.Layout>
  );
}

export default App;
