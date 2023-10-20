import styled from "styled-components";
import Button from "../../components/Button";

const BodyLayout = styled.div`
  display: flex;
  justify-content: center;
  background-color: crimson;
`;

const Screen = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default function UISample() {
  return (
    <BodyLayout>
      <Screen>
        <ButtonWrapper>
          <Button
            buttonText="블락 버튼"
            onClick={() => alert("가나다라마바사")}
            type="block"
            color="primary"
          />
          <Button
            buttonText="가나다라마바사"
            onClick={() => alert("가나다라마바사")}
            type="flex"
            color="primary"
          />
          <Button
            buttonText="가나다라마바사"
            onClick={() => alert("가나다라마바사")}
            type="flex"
            color="gray"
          />
        </ButtonWrapper>
      </Screen>
    </BodyLayout>
  );
}
