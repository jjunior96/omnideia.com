import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secundary';
  children: React.ReactNode;
  minimal?: boolean;
  icon?: React.ReactNode;
  positionIcon?: 'right' | 'left';
  as?: React.ElementType;
};

export type ButtonProps = ButtonTypes & Props;

const Button: React.ForwardRefRenderFunction<ButtonProps, ButtonProps> = (
  {
    children,
    size = 'large',
    color = 'primary',
    minimal = false,
    icon,
    positionIcon = 'left',
    as,
    ...rest
  },
  ref
) => {
  return (
    <S.Container
      as={as}
      size={size}
      positionIcon={positionIcon}
      color={color}
      minimal={minimal}
      ref={ref}
      {...rest}
    >
      <S.Content>
        {!!icon && (
          <S.IconContainer positionIcon={positionIcon}>{icon}</S.IconContainer>
        )}
        {children}
      </S.Content>
    </S.Container>
  );
};

export default forwardRef(Button);
