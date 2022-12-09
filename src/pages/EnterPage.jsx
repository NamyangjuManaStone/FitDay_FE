import { useEffect } from 'react';

import { tokenCookie } from '../utils/cookie';
import AuthModal from '../components/modal/AuthModal';
import useModal from '../hooks/useModal';
import { EnterPageContainer } from './EnterPage.styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EnterPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const { onOpenModal, onCloseModal, ModalPortal } = useModal();

  useEffect(() => {
    if (tokenCookie.getCookie() || user) navigate('/diary');
  }, [navigate, user]);

  return (
    <>
      <EnterPageContainer>
        <div className="enter-intro">
          <span>다이어트 다이어리</span>
          <span>FitDay</span>
        </div>
        <button className="enter-button" onClick={onOpenModal}>
          시작하기
        </button>
      </EnterPageContainer>
      <ModalPortal>
        <AuthModal onCloseModal={onCloseModal} />
      </ModalPortal>
    </>
  );
};

export default EnterPage;
