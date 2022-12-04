import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../constant/homeData';
import { HeaderContainer, HeaderMenu } from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <div className="header">
        <div className="header-logo">
          <span>FitDay</span>
        </div>
        <HeaderMenu>
          {menus.map(({ to, name }) => (
            <Link key={name} to={to} className={pathname.includes(to) ? 'active' : ''}>
              {name}
            </Link>
          ))}
        </HeaderMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
