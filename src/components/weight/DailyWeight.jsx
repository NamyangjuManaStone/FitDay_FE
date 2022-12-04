import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import WeightModal from '../modal/WeightModal';
import { DailyWeightContainer } from './DailyWeight.styled';

const DailyWeight = () => {
  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();
  const { weightList } = useSelector((state) => state.weight);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <>
      <DailyWeightContainer>
        <div className="summary">
          <span>Daily Weight</span>
          <span>체중 기록</span>
        </div>
        <button className="comment" onClick={openModal}>
          <span className="comment-box">+ 오늘 체중 기록하기</span>
        </button>

        <div className="weight">
          {weightList.map((v, idx) => (
            <div key={idx}>
              <div className="weight-list">
                <span>
                  {todayYear}.{todayMonth}.{todayDate}
                </span>
                <span>{v}kg</span>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <WeightModal open={modalOpen} close={closeModal} />
      </DailyWeightContainer>
    </>
  );
};

export default DailyWeight;
