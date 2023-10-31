import React from "react";
import * as S from "./Diaries.style";
import FeedPreview from "../../../../components/FeedPreview/FeedPreview";

export default function Diaries() {
  return (
    <S.Diaries>
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
      <FeedPreview
        src="https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg"
        likeCount={1000}
        shareCount={20}
      />
    </S.Diaries>
  );
}
