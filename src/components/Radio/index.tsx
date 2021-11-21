import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type RadioValue = string | number | ReadonlyArray<string>;

export type RadioProps = {
  label?: string;
  onCheck?: (value: RadioValue) => void;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ label, value, onCheck, ...rest }: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value!);
  };

  return (
    <S.Container>
      <S.Input
        id={label}
        type="radio"
        value={value}
        onChange={onChange}
        {...rest}
      />
      {!!label && <S.Label htmlFor={label}>{label}</S.Label>}
    </S.Container>
  );
};

export default Radio;
