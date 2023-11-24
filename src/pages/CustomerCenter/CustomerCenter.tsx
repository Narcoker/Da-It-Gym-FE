import { useState } from "react";
import FAQItem from "./Board/FAQItem";
import * as S from "./CustomerCenter.style";

const CustomerCenter = () => {
  const faqData = [
    {
      question: "근근근은 어떤 서비스 인가요?",
      answer: (
        <div>
          더 나은 운동을 위한 첫걸음! 손쉽게 사용 가능한 근근근 서비스를 이용해보세요!
          <br />
          오늘한 운동을 쉽고 간편하게 기록하고 다른 사람들과 공유할 수 있습니다.
        </div>
      ),
    },
    {
      question: "내 운동일지는 어떻게 작성하는건가요?",
      answer: (
        <div>
          "내 운동일지"에서 오늘한 운동을 간단하게 기록 할 수 있습니다.
          <br />
          [운동 추가] 버튼을 클릭해 오늘할 운동을 추가하고 운동 시간을 기록해보세요.
        </div>
      ),
    },
    {
      question: "트레이너 신청은 어떻게 하는건가요?",
      answer: (
        <div>
          왼쪽 메뉴(≡)에서 마이페이지로 접속해 [프로필 편집] 버튼을 클릭합니다.
          <br />
          트레이너 개인 정보 수정 활성화하고 자격증과 수상경력 인증해주시면 <br />
          신청 내용 확인 후 트레이너로 변경해드리고 있습니다.
          <br />※ 신청 후 승인까지 영업일 기준 2~3일 정도 소요될 수 있습니다.
        </div>
      ),
    },
    {
      question: "루틴 작성은 무엇인가요?",
      answer: (
        <div>
          본인만을 운동 루틴이 있으신가요?
          <br />
          "루틴 작성" 기능을 통해 본인이 가지고 있는 운동 루틴을 공유할 수 있습니다.
        </div>
      ),
    },
    {
      question: "완료된 운동일지 수정/삭제는 어떻게 하나요?",
      answer: (
        <div>
          "내 운동일지" 클릭 후 캘린더에 삭제할 운동일지 날짜 클릭하세요. <br /> 접속한
          운동일지 오른쪽 휴지통 버튼을 클릭 하면 운동일지 삭제 가능합니다. <br />※ 삭제된
          운동일지는 복구가 어려우니 운동일지 삭제는 신중히 진힝해주세요.
        </div>
      ),
    },
    {
      question: "인바디 정보는 어디서 입력하나요?",
      answer: (
        <div>
          왼쪽 메뉴(≡)에서 마이페이지로 접속해 [인바디] 버튼을 클릭하면 인바디 정보를
          입력할 수 있습니다.
        </div>
      ),
    },
    {
      question: "회원 탈퇴는 어떻게 하나요?",
      answer: (
        <div>
          왼쪽 메뉴(≡)에서 마이페이지로 접속해 [프로필 편집] 버튼을 클릭합니다.
          <br />
          하단 회원탈퇴를 클릭하면 탈퇴가 가능합니다.
          <br />※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 신중히 진행하세요.
        </div>
      ),
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean[]>(faqData.map(() => false));

  const toggleAccordion = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
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
      <S.Center>
          <S.Gtitle>고객센터 안내사항</S.Gtitle>
          <S.Gtitle>고객센터 운영시간 오전 10:00~오후 05:00</S.Gtitle>
        </S.Center>
    </S.AccordionContainer>
  );
};

export default CustomerCenter;
