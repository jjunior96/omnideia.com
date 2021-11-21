import { InputHTMLAttributes, useState } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  value?: string;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  value,
  label,
  isChecked = false,
  onCheck,
  ...rest
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;

    setChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <S.Container>
      <S.Input
        id={label}
        value={value}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...rest}
      />
      {!!label && <S.Label htmlFor={label}>{label}</S.Label>}
    </S.Container>
  );
}

export default Checkbox;
