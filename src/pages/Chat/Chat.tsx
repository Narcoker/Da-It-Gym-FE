import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import * as S from "./Chat.style";
import FriendChat from "./FriendChat";
import MyChat from "./MyChat";
import useChatAPI, { Chat, ChatConfig } from "../../api/useChatAPI";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userInfoState";

interface ChattingProps {
  chats: Chat[];
}

function ChatComponent() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);
  const isComposing = useRef<boolean>(false);
  const { chatId } = useParams();
  const user = useRecoilValue(userInfoState);
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleClickProfileImg = () => {
    navigate(`/profile/${roomName}?section=routines`);
  };

  const chatConfig: ChatConfig = {
    nickname: user.nickname,
    userImg: user.userProfileImgUrl,
    brokerURL: import.meta.env.VITE_WS_BROKER_URL,
    token: localStorage.getItem("accessToken") as string,
    redisRoomId: chatId as string,
  };

  const {
    chats,
    setChats,
    createClient,
    connect,
    disConnect,
    requestPastChats,
    requestChatSumbit,
  } = useChatAPI(chatConfig);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing.current) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const chatInput = chatInputRef.current!.value.trimEnd();
    if (chatInput === "") return;

    requestChatSumbit(chatInput);
    chatInputRef.current!.value = "";
  };

  const handleComposition = (e: React.CompositionEvent) => {
    type CompositionEventType = "compositionstart" | "compositionend";

    // 키 값 재한 -> [Type in CompositionEventType]
    const compositionEventHandler: { [Type in CompositionEventType]: () => void } = {
      compositionstart: () => (isComposing.current = true),
      compositionend: () => (isComposing.current = false),
    };

    const handler = compositionEventHandler[e.type as CompositionEventType];
    handler && handler(); // 핸들러 유무 검사 후 있으면 실행
  };

  const initChat = async () => {
    createClient(); // 클라이언트 생성
    connect(); // 연결(구독)
    const pastedChats = await requestPastChats(); // 과거 채팅 내역 불러오기(HTTP)
    setChats(pastedChats.messages);
    setRoomName(pastedChats.roomName);
  };

  useEffect(() => {
    initChat();
    return () => disConnect(); // 연결 해제
  }, []);

  useEffect(() => {
    if (chatContainerRef.current !== null) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  // 임시 데이터 로직

  function Chatting({ chats }: ChattingProps) {
    return (
      <>
        {chats.map(
          ({ sender, imageUrl, message, readCount, messageCreatedAt }: Chat, index) => {
            const isMyChat = user.nickname === sender;
            const isFriendChat = user.nickname !== sender;
            if (isMyChat)
              return (
                <MyChat
                  key={index}
                  name={sender}
                  imageUrl={imageUrl}
                  message={message}
                  readCount={readCount}
                  createdAt={messageCreatedAt}
                />
              );
            if (isFriendChat)
              return (
                <FriendChat
                  key={index}
                  name={sender}
                  src={imageUrl}
                  message={message}
                  readCount={readCount}
                  createdAt={messageCreatedAt}
                />
              );
          },
        )}
      </>
    );
  }

  return (
    <S.Container>
      <S.Title onClick={handleClickProfileImg}>{roomName} 님과의 채팅</S.Title>
      <S.ChatContainer ref={chatContainerRef}>
        <Chatting chats={chats} />
      </S.ChatContainer>
      <S.InputContainer>
        <S.ChatInput
          ref={chatInputRef}
          autoFocus
          placeholder="메세지를 입력해주세요."
          defaultValue=""
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
  );
}

export default ChatComponent;
