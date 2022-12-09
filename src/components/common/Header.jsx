import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { menus } from '../../constant/homeData';
import { logoutAction } from '../../features/user/user.slice';
import { tokenCookie } from '../../utils/cookie';
import { HeaderContainer, HeaderMenu } from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onClickLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('로그아웃 (하시겠습니까?')) {
      dispatch(logoutAction());
      tokenCookie.removeCookie();
    }
  };

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
      <button onClick={onClickLogout}>로그아웃</button>
    </HeaderContainer>
  );
};

export default Header;
