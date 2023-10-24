import * as S from "./Toggle.style";

interface Props {
  isCheck: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle({ isCheck, setCheck }: Props) {
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  return (
    <S.ToggleLabel onClick={checkHandler} isCheck={isCheck}>
      <S.ToggleDot isCheck={isCheck} />
    </S.ToggleLabel>
  );
}
