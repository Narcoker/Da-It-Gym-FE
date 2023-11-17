import Nav from "../../components/Nav/Nav";
import { useState } from "react";
import FAQItem from "./Board/FAQItem";
import * as S from "./CustomerCenter.style"; // 경로 수정

const CustomerCenter = () => {
  const faqData = [
    {
      question: "근근근은 어떤 서비스 인가요?",
      answer:
        "근근근은 여러분의 운동 능력을 개선하는데 도움을 주는 서비스입니다. 자신이 즐겨 하는 운동을 공유하고, 성장하고 싶은 목표를 설정해보세요.",
    },
    {
      question: "내 운동일지는 어떻게 작성하는건가요?",
      answer:
        "내 운동일지에서 오늘한 운동을 간단하게 기록 할 수 있습니다. [운동 추가] 버튼을 클릭해 오늘할 운동을 추가하고 운동 시간을 기록해보세요.",
    },
    {
      question: "트레이너 등록은 어떻게 하는건가요?",
      answer: "답변 3",
    },
    {
      question: "루틴 작성은 무엇인가요?",
      answer: "답변 4",
    },
    {
      question: "완료된 운동일지 수정/삭제는 어떻게 하나요?",
      answer: "답변 5",
    },
    {
      question: "입력한 인바디 정보 수정이 가능한가요?",
      answer: "답변 6",
    },
    {
      question: "로그인은 어떻게 하는건가요?",
      answer: "답변 7",
    },
    {
      question: "회원 탈퇴는 어떻게 하나요?",
      answer: "답변 8",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean[]>(faqData.map(() => false));

  const toggleAccordion = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <>
      <Nav type="top" />
      <S.AccordionContainer>
        <S.Img>
          <S.Gradient>
            <S.GridentTitle>안녕하세요.</S.GridentTitle>
            <S.GridentTitle>무엇을 도와드릴까요?</S.GridentTitle>
          </S.Gradient>
        </S.Img>
        <S.AccordionTitle>자주 묻는 질문</S.AccordionTitle>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            isOpen={isOpen[index]}
            toggleAccordion={toggleAccordion}
            question={item.question}
            answer={item.answer}
          />
        ))}
        {/* <S.Center>
          <S.Gtitle>고객센터 안내사항</S.Gtitle>
          <S.Gtitle>고객센터 운영시간 오전 10:00~오후 05:00</S.Gtitle>
        </S.Center> */}
      </S.AccordionContainer>
      <Nav type="home" />
    </>
  );
};

export default CustomerCenter;
