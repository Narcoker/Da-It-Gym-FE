import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const NavTopWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: ${COLOR.White};
  border-bottom: 1px solid ${COLOR.Gray1};
  width: 100%;
  max-width: 600px;
  height: 60px;
  top: 0;
  padding: 0px 40px;
  z-index: 99;
`;

export const NavBottomWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: ${COLOR.White};
  border-top: 1px solid ${COLOR.Gray1};
  width: 100%;
  max-width: 600px;
  height: 60px;
  bottom: 0;
  z-index: 99;
`;
export const AllNoteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: royalblue;

  cursor: pointer;
`;

export const MenuBox = styled(AllNoteBox)`
  position: relative;
`;
export const MessengerBox = styled(AllNoteBox)``;
export const AllRoutineBox = styled(AllNoteBox)``;
export const MypageBox = styled(AllNoteBox)``;
export const MyRoutineBox = styled(AllNoteBox)``;
export const MyNoteBox = styled(AllNoteBox)``;
export const FollowListBox = styled(AllNoteBox)``;
export const ChatRoomBox = styled(AllNoteBox)``;
export const NavIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-bottom: 5px;
`;
export const NavMenuTitle = styled.div`
  font-size: 10px;
`;
