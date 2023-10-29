import { useEffect, useState } from "react";
import HashTagButton from "../../../components/HashtagButton/HashtagButton";
import * as S from "./FDSTag.style";
const division = [
  { id: "d1", label: "무분할", type: "division" },
  { id: "d2", label: "2분할", type: "division" },
  { id: "d3", label: "3분할", type: "division" },
  { id: "d4", label: "4분할", type: "division" },
  { id: "d5", label: "5분할", type: "division" },
  { id: "d6", label: "6분할+", type: "division" },
];
const body = [
  { id: "b1", label: "가슴", type: "division" },
  { id: "b2", label: "등", type: "division" },
  { id: "b3", label: "하체", type: "division" },
  { id: "b4", label: "어깨", type: "division" },
  { id: "b5", label: "이두", type: "division" },
  { id: "b6", label: "삼두", type: "division" },
  { id: "b7", label: "복근", type: "division" },
  { id: "b8", label: "유산소", type: "division" },
];
function FDSTag() {
  const [ActiveButtonId, setActiveButtonId] = useState("d2");
  const [ActiveBody, setActiveBody] = useState<Array<string>>([]);
  const handleDivisionIsActive = (id: string, label: string) => {
    console.log(id, label);
    setActiveButtonId(id);
  };

  // const handleBodyIsActive = (label: string) => {
  //   if (ActiveBody.includes(label)) {
  //     setActiveBody(ActiveBody.filter((ele) => ele !== label));
  //   } else {
  //     setActiveBody([...ActiveBody, label]);
  //   }
  //   console.log(ActiveBody);
  // };
  useEffect(() => {
    setActiveBody(["가슴", "등", "어깨"]);
  }, []);
  return (
    <S.TagWrapper>
      <S.TagTitle>태그를 추가해주세요</S.TagTitle>
      <S.TagDivistionBox>
        {division.map((data) => (
          <>
            <HashTagButton
              id={data.id}
              label={data.label}
              type="division"
              onClick={() => handleDivisionIsActive(data.id, data.label)}
              isActive={ActiveButtonId === data.id}
            />
          </>
        ))}
      </S.TagDivistionBox>
      <S.TagDivistionBox>
        {body.map((data) => (
          <>
            <HashTagButton
              id={data.id}
              label={data.label}
              type="body"
              isActive={ActiveBody.includes(data.label)}
              //ActiveBody 배열에 label있으면 isActive값 true 로 전달
            />
          </>
        ))}
      </S.TagDivistionBox>
    </S.TagWrapper>
  );
}

export default FDSTag;
