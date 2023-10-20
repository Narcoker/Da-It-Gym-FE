import "./App.css";
import New from "./pages/New/New";
import { Route, Routes } from "react-router";
import UISample from "./pages/UISample/UISample";
import IconTest from "./pages/IconTest/IconTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<New />}></Route>
      <Route path="/ui-sample" element={<UISample />}></Route>
      <Route path="/icon-test" element={<IconTest />}></Route>
    </Routes>
  );
}

export default App;
