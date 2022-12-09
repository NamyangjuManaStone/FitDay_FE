import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import { SignUpModalContainer } from './SignUpModal.styled';
import { signupAction } from '../../features/user/user.actions';

const SignUpModal = ({ onChangeAuthMode }) => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !nickname || !password) alert('빈 값 ㄴ');
    if (password.length < 4) alert('4 이상');

    dispatch(signupAction({ email, nickname, password }));
  };

  return (
    <SignUpModalContainer>
      <div className="signupmodal">
        <span className="signupmodal-info">회원가입</span>

        <form className="signupmodal-form" onSubmit={onSubmit}>
          <input type="text" value={nickname} onChange={onChangeNickname} placeholder="닉네임" />
          <input type="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
          <input
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            placeholder="비밀번호 확인"
          />
          <button type="submit" className="signupmodal-form-signbtn">
            회원가입
          </button>
          <span>
            이미 가입되어 있으신가요?
            <span className="change" onClick={onChangeAuthMode}>
              로그인
            </span>
          </span>
        </form>
      </div>
    </SignUpModalContainer>
  );
};

export default SignUpModal;
