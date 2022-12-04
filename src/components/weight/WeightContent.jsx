import React from 'react';
import DailyWeight from './DailyWeight';
import GoalWeight from './GoalWeight';
import { WeightContentContainer } from './WeightContent.styled';

const WeightContent = () => {
  return (
    <WeightContentContainer>
      <GoalWeight />
      <DailyWeight />
    </WeightContentContainer>
  );
};

export default WeightContent;
