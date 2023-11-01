import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Nav from "../../components/Nav/Nav";
import * as S from "./Chat.style";
import FriendChat from "./FriendChat";
import MyChat from "./MyChat";

interface Chat {
  name: string;
  src: string;
  message: string;
}

interface ChattingProps {
  chats: Chat[];
}

function Chat() {
  const myName = "김준서";
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<Chat[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const handleChatInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (chatInput === "") return;

    setChats((prev) => [
      ...prev,
      {
        name: myName,
        src: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
        message: chatInput.trimEnd(),
      } as Chat,
    ]);

    setChatInput("");
  };

  const handleComposition = (e: React.CompositionEvent) => {
    if (e.type === "compositionstart") {
      setIsComposing(true);
    } else if (e.type === "compositionend") {
      setIsComposing(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current !== null) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    setChats([
      {
        name: "조재균",
        src: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
        message: "준서 오늘 운동 몇시에 갈거야?",
      },

      {
        name: "김준서",
        src: "https://images.chosun.com/resizer/lGyzt5Hi0efXfaeVhy5gXwXHilc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/52PNRX6QMNCRDD3QBAFB6XJJ6M.jpg",
        message:
          "오늘 학교갔다가 수업 마치고 교수님 호출 있어서 교수님 뵙고 애들이랑 밥먹고 하면 한 9시 쯤 될 것 같은데 같이 갈 수 있어?",
      },
    ]);
  }, []);

  function Chatting({ chats }: ChattingProps) {
    return (
      <>
        {chats.map(({ name, src, message }: Chat, index) => {
          const isMyChat = myName === name;
          if (isMyChat)
            return <MyChat key={index} name={name} src={src} message={message} />;
          if (!isMyChat)
            return <FriendChat key={index} name={name} src={src} message={message} />;
        })}
      </>
    );
  }

  return (
    <>
      <Nav type="top" />
      <S.Container>
        <S.Title>채팅</S.Title>
        <S.ChatContainer ref={chatContainerRef}>
          <Chatting chats={chats} />
        </S.ChatContainer>
        <S.InputContainer>
          <S.ChatInput
            autoFocus
            placeholder="메세지를 입력해주세요."
            value={chatInput}
            onChange={handleChatInput}
            onKeyDown={(e) => handleEnter(e)} // onkeyUp 적용하면 안됨
            onCompositionStart={handleComposition}
            onCompositionEnd={handleComposition}
          />

          {/*
            velog
            이 문제는 IME(입력기)와 관련이 있을 수 있습니다. 특히 한글 같은 아시아 언어를 입력할 때 IME는 사용자가 문자를 완성하기 전까지 실제 문자를 입력하지 않습니다.
            따라서 한글을 입력하는 도중에 엔터 키를 누르면 '완성' 및 '전송' 두 가지 작업이 동시에 수행될 수 있습니다.
            이 문제를 해결하려면 React에서 제공하는 compositionstart와 compositionend 이벤트를 활용하여 한글 입력이 완료되었는지 확인하면 됩니다. 
            onCompositionStart 및 onCompositionEnd 이벤트 핸들러를 추가하면 해당 문제를 해결할 수 있습니다. 
            */}
          <S.ButtonWrapper>
            <Button display="flex" type="fill" onClick={handleSubmit} size="large">
              전송
            </Button>
          </S.ButtonWrapper>
        </S.InputContainer>
      </S.Container>

      <Nav type="chat" />
    </>
  );
}

export default Chat;
