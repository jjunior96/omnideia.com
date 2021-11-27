import * as S from './styles';

export type IconColors = 'green' | 'yellow' | 'purple';

export type CardInfoProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  iconColor?: IconColors;
};

const CardInfo = ({ title, icon, iconColor, description }: CardInfoProps) => {
  return (
    <S.Container>
      <S.Content>
        {!!icon && (
          <S.IconContainer iconColor={iconColor}>{icon}</S.IconContainer>
        )}

        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};

export default CardInfo;
