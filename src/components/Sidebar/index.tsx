import ActiveLink from 'components/ActiveLink';
import Logo from 'components/Logo';

import { SidebarData } from './data';
import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <h2>Sidebar</h2>

        {SidebarData.map((item) => (
          <div key={item.id}>
            <ActiveLink href={item.path}>
              <p>{item.name}</p>
            </ActiveLink>
          </div>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Sidebar;
