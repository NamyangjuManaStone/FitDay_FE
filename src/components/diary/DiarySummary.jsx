import React from 'react';
import { DiarySummaryContainer } from './DiarySummary.styled';

const DiarySummary = () => {
  return (
    <DiarySummaryContainer>
      <div className="summary">
        <span>SUMMARY</span>
        <span>요약</span>
      </div>
      <div className="kcal">
        <span>(kcal)</span>
        <div className="kcal-cal">
          <span>일일 권장량</span>
          <span>1200</span>
        </div>
        <div className="kcal-cal">
          <span>섭취 칼로리</span>
          <span>- 300</span>
        </div>
        <div className="kcal-cal">
          <span>운동 칼로리</span>
          <span>+ 100</span>
        </div>
        <hr />
        <div className="kcal-cal">
          <span>남은 칼로리</span>
          <span>1000</span>
        </div>
      </div>
      <div className="comment">
        <span>COMMENT</span>
        <span className="comment-box">더 열심히 운동</span>
      </div>
    </DiarySummaryContainer>
  );
};

export default DiarySummary;
