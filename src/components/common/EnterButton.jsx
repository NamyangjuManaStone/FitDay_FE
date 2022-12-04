import React from 'react';

const EnterButton = ({ onOpenModal }) => {
  return (
    <>
      <button onClick={onOpenModal}>로그인</button>
    </>
  );
};

export default EnterButton;
