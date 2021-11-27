import CardInfo, { CardInfoProps } from 'components/CardInfo';

import * as S from './styles';

type InfoProps = {
  id: string;
} & CardInfoProps;

export type SectionInfoProps = {
  info: InfoProps[];
};

const SectionInfo = ({ info }: SectionInfoProps) => {
  return (
    <S.Container aria-label="Section info">
      <S.Content>
        {info.map((item) => (
          <CardInfo
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconColor={item.iconColor}
            aria-label={item.title}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default SectionInfo;
