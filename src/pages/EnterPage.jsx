import React, { useState } from 'react';
import EnterButton from '../components/common/EnterButton';
import AuthModal from '../components/modal/AuthModal';
import LoginModal from '../components/modal/LoginModal';

import useModal from '../hooks/useModal';

import { EnterPageContainer } from './EnterPage.styled';

const EnterPage = () => {
  const { onOpenModal, onCloseModal, ModalPortal } = useModal();

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
