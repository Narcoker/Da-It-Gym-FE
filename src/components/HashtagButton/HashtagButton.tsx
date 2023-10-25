import React from "react";
import * as S from "./HashtagButton.style";

export interface HashTagButtonProps {
  id?: string;
  label: string;
  isActive?: boolean;
  // setIsActive: React.Dispatch<React.SetStateAction<number>>;
  type?: "division" | "body";
  onClick?: () => void;
}

const HashTagButton: React.FC<HashTagButtonProps> = ({
  id,
  label,
  type,
  isActive = false,
  onClick,
}) => {
  const labelWidth = label.length * 10;

  return (
    <>
      {type === "division" && (
        <S.StyledButton
          labelWidth={labelWidth}
          isActive={isActive}
          id={id}
          type={type}
          onClick={onClick}
        >
          {label}
        </S.StyledButton>
      )}
      {type === "body" && (
        <S.StyledButton
          labelWidth={labelWidth}
          isActive={isActive}
          id={id}
          type={type}
          onClick={onClick}
        >
          {label}
        </S.StyledButton>
      )}
    </>
  );
};

export default HashTagButton;
