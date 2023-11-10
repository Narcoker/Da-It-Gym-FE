import { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import * as S from "./SignupInput.style";
import useDebounce from "../../../hooks/useDebounce";
import { signupState } from "../../../recoil/signupState";
import { useRecoilState } from "recoil";

function SignupInput() {
  // 중복 체크 백엔드에 닉네임 중복되는지 확인하는 것
  const [duplicateMessage, setDuplicateMessage] = useState<string>("");
  const [isDuplicate, setIsDuplicate] = useRecoilState<string>(signupState); // 🤗recoil로 선언해서 버튼 처리할 것
  const [nickname, setNickname] = useState<string>("");
  const debounceNickname = useDebounce(nickname, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    if (newNickname.length <= 8) {
      setNickname(event.target.value);
    }
  };

  useEffect(() => {
    const checkDuplicate = async () => {
      if (debounceNickname) {
        try {
          //🔥 reqeust 날리고 요청값이 중복이라는 응답 받으면 -> setIsDuplicate에 따라서 duplicateMessage출력
        } catch (error) {
          console.error("닉네임 중복 확인 에러", error);
          setIsDuplicate(""); // 에러 발생 시 중복 상태를 null로 설정
        }
      }
    };
    checkDuplicate();
  }, [debounceNickname]);
  useEffect(() => {
    if (isDuplicate === "") {
      setDuplicateMessage("");
    } else if (isDuplicate === "중복") {
      setDuplicateMessage(`${nickname}은 이미 사용중인 닉네임값입니다.`);
    } else {
      setDuplicateMessage("사용가능한 닉네임입니다.");
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
      {nickname !== "" && (
        <S.SignupDuplicate duplicate={isDuplicate}>{duplicateMessage}</S.SignupDuplicate>
      )}
    </S.SignupInputWrapper>
  );
}

export default SignupInput;
