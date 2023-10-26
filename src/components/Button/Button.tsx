import * as S from "./Button.style";

export interface Props {
  children: React.ReactNode;
  display: "flex" | "block";
  type: "border" | "fill" | "deactivated";
  size: "medium" | "large";
  onClick: () => void;
}

// 기존의 type을 display로 변경했습니다.
// type을 border fill deactivated로 변경했습니다.
// border는 primary 컬러를 배경 색과 border 색으로 사용
// fill은 primary 컬러를 배경으로 사용
// deactivated는 버튼이 비활성화일 때 사용하면 됩니다.
// 불필요하게 큰 버튼도 있는 것 같아 size를 추가했습니다.

export default function Button({ children, display, type, size, onClick }: Props) {
  return (
    <>
      {display === "block" && (
        <S.BlockButton
          onClick={() => {
            type !== "deactivated" && onClick();
          }}
          type={type}
          size={size}
        >
          {children}
        </S.BlockButton>
      )}
      {display === "flex" && (
        <S.FlexButton
          onClick={() => {
            type !== "deactivated" && onClick();
          }}
          type={type}
          size={size}
        >
          {children}
        </S.FlexButton>
      )}
    </>
  );
}
