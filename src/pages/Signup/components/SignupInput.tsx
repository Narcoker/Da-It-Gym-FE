import { useEffect, useMemo, useState } from "react";
import Input from "../../../components/Input/Input";
import * as S from "./SignupInput.style";
import useDebounce from "../../../hooks/useDebounce";

function SignupInput() {
  // 중복 체크 백엔드에 닉네임 중복되는지 확인하는 것
  const [duplicateMessage, setDuplicateMessage] = useState<string>("");
  const [isDuplicate, setIsDuplicate] = useState(true);
  const [nickname, setNickname] = useState<string>("");
  const debounceNickname = useDebounce(nickname, 500);

  const memorizationNickname = useMemo(() => nickname, [debounceNickname]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    if (newNickname.length <= 8) {
      setNickname(event.target.value);
    }
  };

  useEffect(() => {
    //🔥 reqeust 날리고 요청값이 중복이라는 응답 받으면 -> setIsDuplicate에 따라서 duplicateMessage출력
    setDuplicateMessage(
      isDuplicate
        ? `${nickname}은 이미 사용중인 닉네임값입니다.`
        : "사용가능한 닉네임입니다.",
    );
    return setIsDuplicate(true);
  }, [debounceNickname]);
  return (
    <S.SignupInputWrapper>
      <Input
        placeholder="닉네임을 설정해주세요. (1~8글자)"
        defaultValue={memorizationNickname}
        maxLength={8}
        onChange={handleChange}
      />
      {nickname !== "" && (
        <S.SignupDuplicate duplicate={isDuplicate}>{duplicateMessage}</S.SignupDuplicate>
      )}
    </S.SignupInputWrapper>
  );
}

export default SignupInput;
