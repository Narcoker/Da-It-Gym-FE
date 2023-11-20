import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userInfoState";
import { Routine, useRoutine } from "../../hooks/useRoutine";
import useRoutineAPI, { CreateRoutinePayload } from "../../api/useRoutineAPI";
import RoutineAccordion from "../../components/RoutineAccordion/RoutineAccordion";
import Nav from "../../components/Nav/Nav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import * as S from "./FeedNewRoutine.style";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

function FeedNewRoutine() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useRecoilValue(userInfoState);
  const [routine, dispatch] = useRoutine();
  const [selectedDivision, setSelectedDivision] = useState<number>(1);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { requestCreateRoutine } = useRoutineAPI();

  const handleChangeDivision = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDivision(Number(e.target.value));
  };

  const handleSumbitRoutine = () => {
    const payload: CreateRoutinePayload = {
      title: titleRef.current!.value,
      description: textareaRef.current!.value,
      division: selectedDivision,
      routine: routine,
    };
    requestCreateRoutine(payload);
    toast.success("루틴을 등록했습니다.");
    navigate("/feed/routine");
  };

  useEffect(() => {
    const friendRoutine: Routine = location.state?.routine;
    const friendRoutineDivision = location.state?.division;
    friendRoutineDivision && setSelectedDivision(location.state?.division);
    friendRoutine && dispatch({ type: "UPDATE_ROUTINE", newRoutine: friendRoutine });
  }, []);

  return (
    <>
      <Nav type="top" />
      <S.BoardContainer>
        <S.BoardHeader>
          <S.WriterInfoWrapper>
            <S.WriterProfileImgWrapper>
              <S.WriterProfileImg src={user.userProfileImgUrl} alt="img" />
            </S.WriterProfileImgWrapper>
            <S.BoardTitle>{user.nickname}</S.BoardTitle>
          </S.WriterInfoWrapper>
          <S.Select
            name="divide"
            value={selectedDivision}
            onChange={(e) => {
              handleChangeDivision(e);
            }}
          >
            <option value="1">무분할</option>
            <option value="2">2분할</option>
            <option value="3">3분할</option>
            <option value="4">4분할</option>
            <option value="5">5분할</option>
            <option value="6">6분할+</option>
          </S.Select>
        </S.BoardHeader>

        <S.BoardTitleWrapper>
          <Input placeholder="제목을 입력해주세요" defaultValue="" ref={titleRef} />
        </S.BoardTitleWrapper>

        <S.BoardDescriptionWrapper>
          <TextArea
            placeholder="내용을 입력해주세요"
            defaultValue=""
            height="150px"
            ref={textareaRef}
          />
        </S.BoardDescriptionWrapper>
      </S.BoardContainer>

      <S.RoutineContainer>
        <RoutineAccordion
          routine={routine}
          dispatch={dispatch}
          mulitple={true}
          type="record"
        />
      </S.RoutineContainer>

      <S.RoutineFunctionsContainer>
        <Button display="flex" type="border" size="large" onClick={() => {}}>
          취소
        </Button>
        <Button display="flex" type="fill" size="large" onClick={handleSumbitRoutine}>
          공유하기
        </Button>
      </S.RoutineFunctionsContainer>

      <Nav type="home" />
    </>
  );
}

export default FeedNewRoutine;
