import { useSearchParams } from "react-router-dom";
import ExerciseDiaryDefault from "./components/ExerciseDiaryDefault/ExerciseDiaryDefault";
import ExerciseNav from "./components/ExerciseNav/ExerciseNav";
import ExerciseDiarySuccess from "./components/ExerciseDiarySuccess/ExerciseDiarySuccess";
import Nav from "../../components/Nav/Nav";

export default function ExerciseDiary() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("type");
  return (
    <>
      {query === "success" ? (
        <>
          <ExerciseDiarySuccess />
          <Nav type="home" />
        </>
      ) : (
        <>
          <ExerciseDiaryDefault />
          <ExerciseNav />
        </>
      )}
    </>
  );
}
