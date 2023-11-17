import * as S from "./FAQ.style";
import * as Icon from "../../../components/Icon";
import * as COLOR from "../../../constants/color";

interface FAQItemProps {
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
  index,
  isOpen,
  toggleAccordion,
  question,
  answer,
}) => {
  return (
    <S.AccordionItem>
      <S.AccordionSummary onClick={() => toggleAccordion(index)}>
        {question}
        <S.ArrowIcon isOpen={isOpen}>
          <Icon.DownArrow size="15" color={COLOR.Gray4} />
        </S.ArrowIcon>
      </S.AccordionSummary>
      {isOpen && <S.AccordionDetails>{answer}</S.AccordionDetails>}
    </S.AccordionItem>
  );
};

export default FAQItem;
