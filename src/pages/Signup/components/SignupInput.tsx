import { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import * as S from "./SignupInput.style";
import useDebounce from "../../../hooks/useDebounce";
import {
  regCheckState,
  signupState,
  submitNicknameState,
} from "../../../recoil/signupState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useUserAPI } from "../../../api/useUserAPI";

function SignupInput() {
  // 중복 체크 백엔드에 닉네임 중복되는지 확인하는 것
  const [duplicateMessage, setDuplicateMessage] = useState<string>("");
  const [isDuplicate, setIsDuplicate] = useRecoilState<string>(signupState); // 🤗recoil로 선언해서 버튼 처리할 것
  const [nickname, setNickname] = useState<string>("");
  const [regCheck, setRegCheck] = useRecoilState(regCheckState);
  const setSubmitNickname = useSetRecoilState(submitNicknameState);
  const debounceNickname = useDebounce(nickname, 1000);
  const { requestDuplicatedNickname } = useUserAPI();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;

    if (newNickname.length <= 11) {
      setNickname(event.target.value);
    }
  };
  console.log("정규식 테스트", regCheck);

  useEffect(() => {
    const checkDuplicate = async () => {
      if (debounceNickname && debounceNickname.trim() !== "") {
        setSubmitNickname(debounceNickname);
        try {
          //🔥 reqeust 날리고 요청값이 중복이라는 응답 받으면 -> setIsDuplicate에 따라서 duplicateMessage출력
          requestDuplicatedNickname(debounceNickname, setIsDuplicate);
        } catch (error) {
          console.error("닉네임 중복 확인 에러", error);
          setIsDuplicate(""); // 에러 발생 시 중복 상태를 null로 설정
        }
      }
    };
    checkDuplicate();
    const regExp = /^[A-Za-z_]+$/;
    if (regExp.test(debounceNickname)) {
      setRegCheck(true);
    } else {
      setRegCheck(false);
    }
  }, [debounceNickname]);
  useEffect(() => {
    if (isDuplicate === "사용가능" && regCheck) {
      setDuplicateMessage(`${debounceNickname}은 사용가능한 닉네임입니다.`);
    } else if (isDuplicate === "중복") {
      setDuplicateMessage(`${nickname}은 이미 사용중인 닉네임값입니다.`);
    } else if (!regCheck) {
      setDuplicateMessage(`닉네임은 영어,_로 이뤄져야 합니다.`);
    } else {
      setDuplicateMessage("");
    }
    return setIsDuplicate("");
  }, [debounceNickname]);

  return (
    <S.SignupInputWrapper>
      <Input
        placeholder="닉네임을 설정해주세요. (1~11글자)"
        defaultValue={debounceNickname}
        maxLength={11}
        onChange={handleChange}
      />
      {debounceNickname.trim() !== "" && (
        <S.SignupDuplicate duplicate={isDuplicate} check={regCheck}>
          {duplicateMessage}
        </S.SignupDuplicate>
      )}
    </S.SignupInputWrapper>
  );
}

export default SignupInput;
