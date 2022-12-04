import * as S from './DiaryHeader.styled';

const DiaryHeader = () => {
  return (
    <S.DiaryHeaderContainer>
      <S.DiaryDate>
        <span>2022.06.30</span>
      </S.DiaryDate>
      <S.DiaryGoal>
        <span>목표칼로리</span>
        <span>2100 kcal</span>
      </S.DiaryGoal>
    </S.DiaryHeaderContainer>
  );
};

export default DiaryHeader;
