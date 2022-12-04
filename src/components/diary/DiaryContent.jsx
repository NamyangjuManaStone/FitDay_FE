import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './DiaryContent.styled';
import DiarySummary from './DiarySummary';
import FitnessDiary from './FitnessDiary';
import FoodDiary from './FoodDiary';
import ReviewDiary from './ReviewDiary';

const DiaryContent = () => {
  const [flag, setFlag] = useState(1);
  const { pathname } = useLocation();

  return (
    <S.DiaryContentContainer>
      <S.DiaryContent>
        <S.DiaryWrapper>
          <S.DiaryContentButton className={flag === 1 ? 'active' : ''} onClick={() => setFlag(1)}>
            식단
          </S.DiaryContentButton>
          <S.DiaryContentButton className={flag === 2 ? 'active' : ''} onClick={() => setFlag(2)}>
            운동
          </S.DiaryContentButton>
          <S.DiaryContentButton className={flag === 3 ? 'active' : ''} onClick={() => setFlag(3)}>
            일기
          </S.DiaryContentButton>
        </S.DiaryWrapper>
        <S.DiaryFlag>
          {flag === 1 ? <FoodDiary /> : flag === 2 ? <FitnessDiary /> : <ReviewDiary />}
        </S.DiaryFlag>
      </S.DiaryContent>
      <DiarySummary />
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
