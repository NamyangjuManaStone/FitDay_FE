import React from 'react';
import ReactModal from 'react-modal';
import useInput from '../../hooks/useInput';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import { LoginModalContainer } from './LoginModal.styled';

const LoginModal = ({ onChangeAuthMode, onCloseModal }) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onChangeSignUpModal = () => {
    onChangeAuthMode();
  };

  return (
    <LoginModalContainer>
      <div className="loginmodal">
        <span className="loginmodal-info">로그인</span>
        <form className="loginmodal-form">
          <input type="email" placeholder="이메일" value={email} onChange={onChangeEmail} />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <button className="loginmodal-form-lgbtn" type="submit">
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
