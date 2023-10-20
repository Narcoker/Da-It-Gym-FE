import { Link } from "react-router-dom";

function New() {
  //   useRecoilValue -> 값만 사용
  //   useSetRecoilState -> 변경 함수 사용
  //   useRecoilState -> 값, 변경 함수 둘다 사용
  return (
    <>
      <Link to="icon-test">IconTest</Link>
      <Link to="ui-sample">UISample</Link>
    </>
  );
}

New.defaultProps = {
  name: "Kim",
  age: 13,
};

export default New;
