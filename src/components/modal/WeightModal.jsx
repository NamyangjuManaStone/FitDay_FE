import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../hooks/useInput';
import { 오호수몸무게추가 } from '../../features/weight/weightSlice';
import { WeightModalContainer } from './WeightModal.styled';
import { useEffect } from 'react';

const WeightModal = (props) => {
  const dispatch = useDispatch();

  const { open, close } = props;
  const [value, onChangeValue, setValue] = useInput('');

  useEffect(() => {
    setValue('');
  }, [setValue, open]);

  const onSubmitCurrentWeight = (e) => {
    e.preventDefault();
    dispatch(오호수몸무게추가(value));
    close();
  };

  const onKeyPressEnter = (e) => e.key === 'Enter' && onSubmitCurrentWeight(e);

  return (
    <WeightModalContainer>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <div className="weightmodal">
            <div className="weightmodal-header">
              <button className="weightmodal-header__close" onClick={close}>
                &times;
              </button>
            </div>
            <form onSubmit={onSubmitCurrentWeight} onKeyPress={onKeyPressEnter}>
              <div className="weightmodal-input">
                <input
                  type="text"
                  pattern="[0-9]+"
                  value={value}
                  onChange={onChangeValue}
                  className="weightmodal-input"
                  placeholder="현재 체중을 입력하세요."
                />
                <span className="weightmodal-kg">kg</span>
              </div>
              <div className="weightmodal-footer">
                <button type="submit" className="weightmodal-footer__close">
                  저장
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </WeightModalContainer>
  );
};

export default WeightModal;
