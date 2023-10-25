import { forwardRef } from "react";
import * as S from "./TextArea.style";

interface Props {
  placeholder: string;
  height?: string;
  textareaTitle?: string;
  defaultValue?: string;
  required?: boolean;
}

// placeholder - Textarea의 placeholder를 지정할 수 있습니다
// height - Textarea의 placeholder를 지정할 수 있습니다
// inputTitle - Textarea 항목의 제목을 지정할 수 있습니다. 필요 없으면 사용하지 않아도 됩니다.
// defaultBalue - Textarea 항목의 기본 값을 지정할 수 있습니다
// required - Textarea의 항목이 필수 항목일 경우 사용합니다. TextareaTitle 옆에 붉은 * 가 표시됩니다.
// ref - ref 를 이용해 부모 컴포넌트에서 Textarea의 value를 사용할 수 있습니다.
const TextArea = forwardRef(function TextArea(
  { placeholder, height, textareaTitle, defaultValue, required = false }: Props,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <S.Label>
      {textareaTitle && (
        <S.TitleWrapper>
          <S.TextareaTitle>{textareaTitle}</S.TextareaTitle>
          {required && <S.Required>*</S.Required>}
        </S.TitleWrapper>
      )}

      <S.TextareaStyle
        height={height}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={ref}
      />
    </S.Label>
  );
});
export default TextArea;
