import { forwardRef } from "react";
import * as S from "./Input.style";

interface Props {
  placeholder?: string;
  inputTitle?: string;
  defaultValue?: string;
  required?: boolean;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// placeholder - Input의 placeholder를 지정할 수 있습니다
// inputTitle - Input 항목의 제목을 지정할 수 있습니다. 필요 없으면 사용하지 않아도 됩니다.
// defaultBalue - Input 항목의 기본 값을 지정할 수 있습니다
// required - Input 항목이 필수 항목일 경우 사용합니다. inputTitle 옆에 붉은 * 가 표시됩니다.
// ref - ref 를 이용해 부모 컴포넌트에서 Input의 value를 사용할 수 있습니다.
const Input = forwardRef(function Input(
  { placeholder, inputTitle, defaultValue, required = false, maxLength, onChange }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <S.Label>
      {inputTitle && (
        <S.TitleWrapper>
          <S.InputTitle>{inputTitle}</S.InputTitle>
          {required && <S.Required>*</S.Required>}
        </S.TitleWrapper>
      )}

      <S.InputStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={ref}
        maxLength={maxLength}
        onChange={onChange}
      />
    </S.Label>
  );
});
export default Input;
