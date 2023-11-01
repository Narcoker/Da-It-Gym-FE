import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(60px);
  user-select: none;
  height: 82%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Title = styled.div`
  text-align: start;
  /* border: 1px solid red; */
  width: 82%;
  font-size: ${FONT.XL};
  padding: 20px 0;
  font-weight: ${FONT.Bold};
`;

export const ChatContainer = styled.div`
  width: 82%;
  flex: 10;
  border: 1px solid ${COLOR.Gray2};
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.Gray2};
  border-top: none;
  width: 82%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  gap: 10px;
  padding: 5px 10px;
  font-size: ${FONT.M};
`;

export const ButtonWrapper = styled.div`
  white-space: nowrap;
  /* border: 1px solid red; */
  height: 40px;
  transform: translateY(2px);
`;

export const ChatInput = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid ${COLOR.Gray1};
  padding: 12px 20px;
  font-size: ${FONT.M};
  &:focus {
    border: 1px solid ${COLOR.Primary};
  }
  border-radius: 5px;
  resize: none;
  height: 40px;
`;
