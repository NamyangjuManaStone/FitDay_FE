import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginAction } from '../../features/user/user.actions';
import useInput from '../../hooks/useInput';
import { LoginModalContainer } from './LoginModal.styled';

const LoginModal = ({ onChangeAuthMode, onCloseModal }) => {
  const dispatch = useDispatch();
  const { loginDone } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onChangeSignUpModal = () => {
    onChangeAuthMode();
  };

  const hendleCloseModal = () => {
    onCloseModal();
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return;
    dispatch(loginAction({ email, password }));
    loginDone && hendleCloseModal();
  };

  return (
    <LoginModalContainer>
      <div className="loginmodal">
        <span className="loginmodal-info">로그인</span>
        <form className="loginmodal-form" onSubmit={onSubmitLogin}>
          <input type="email" placeholder="이메일" value={email} onChange={onChangeEmail} />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <button className="loginmodal-form-lgbtn" type="submit" disabled={!email || !password}>
            로그인
          </button>
          <span>
            회원이 아니신가요?
            <span className="change" onClick={onChangeSignUpModal}>
              회원가입
            </span>
          </span>
        </form>
      </div>
    </LoginModalContainer>
  );
};

export default LoginModal;
