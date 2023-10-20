import styled, { css } from "styled-components";

interface Props {
  buttonText: string;
  type: "flex" | "block";
  color: "primary" | "gray";
  onClick: () => void;
}

interface StyleProps {
  color: string;
}

const getStyle = (color: string) => {
  switch (color) {
    case "primary":
      return css`
        background-color: royalblue;
        color: white;
        &:hover {
          background-color: #2d3a98;
        }
      `;
    case "gray":
      return css`
        background-color: lightgray;
        color: gray;
      `;
  }
};

const BlockButton = styled.button<StyleProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: 0.3s;

  ${({ color }) => getStyle(color)}
`;

const FlexButton = styled(BlockButton)`
  flex: 1;
`;

export default function Button({ buttonText, type, color, onClick }: Props) {
  return (
    <>
      {type === "block" && (
        <BlockButton onClick={onClick} color={color}>
          {buttonText}
        </BlockButton>
      )}
      {type === "flex" && (
        <FlexButton onClick={onClick} color={color}>
          {buttonText}
        </FlexButton>
      )}
    </>
  );
}
