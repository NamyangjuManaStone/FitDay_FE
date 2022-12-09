import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { menus } from '../../constant/homeData';
import { changeNicknameAction } from '../../features/user/user.actions';
import { logoutAction } from '../../features/user/user.slice';
import useInput from '../../hooks/useInput';
import { tokenCookie } from '../../utils/cookie';
import { HeaderContainer, HeaderMenu } from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [nickname, onChangeNickname] = useInput('');

  const onClickLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('로그아웃 하시겠습니까?')) {
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
          <span>닉네임: {user?.nickname}</span>
          <button className="logoutbtn" onClick={onClickLogout}>
            로그아웃
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(changeNicknameAction({ nickname }));
            }}
          >
            <input type="text" value={nickname} onChange={onChangeNickname} />
            <button type="submit">change</button>
          </form>
        </HeaderMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
