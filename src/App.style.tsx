import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: antiquewhite;
`;
export const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  background-color: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
