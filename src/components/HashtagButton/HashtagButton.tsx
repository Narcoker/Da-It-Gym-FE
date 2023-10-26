import React, { useState } from "react";
import * as S from "./HashtagButton.style";

interface HashTagButtonProps {
  label: string;
  type: "division" | "body";
}

const HashTagButton: React.FC<HashTagButtonProps> = ({ label, type }) => {
  const [isActive, setIsActive] = useState(false);
  const labelWidth = label.length * 10;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <S.StyledButton
      labelWidth={labelWidth}
      isActive={isActive}
      type={type}
      onClick={handleClick}
    >
      {label}
    </S.StyledButton>
  );
};

export default HashTagButton;
