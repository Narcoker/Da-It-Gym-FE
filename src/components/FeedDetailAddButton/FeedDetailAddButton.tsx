import * as S from "./FeedDetailAddButton.style";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
interface FeedDetailAddButtonProps {
  children: string;
  onClick: () => void;
}
function FeedDetailAddButton({ children, onClick }: FeedDetailAddButtonProps) {
  return (
    <div>
      <S.AddMyDiaryBox onClick={() => onClick()}>
        <S.IconDiv>
          <Icon.AddImage size="24" color={COLOR.Gray2} />
        </S.IconDiv>
        <S.Content>{children}</S.Content>
      </S.AddMyDiaryBox>
    </div>
  );
}

export default FeedDetailAddButton;
