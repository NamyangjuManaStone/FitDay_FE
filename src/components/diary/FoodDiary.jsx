import { useState } from 'react';

import AddButton from '../common/AddButton';
import DiaryRecord from './DiaryRecord';
import { FoodDiaryContainer } from './FoodDiary.styled';

const FoodDiary = () => {
  const [currMenu, setCurrMenu] = useState(0);

  const onChangeCurrMenu = (menu) => () => menu === currMenu ? setCurrMenu(0) : setCurrMenu(menu);

  return (
    <FoodDiaryContainer>
      <AddButton className={currMenu === 1 ? 'active' : ''} onClick={onChangeCurrMenu(1)}>
        + 아침
      </AddButton>
      {currMenu === 1 && <DiaryRecord />}
      <AddButton className={currMenu === 2 ? 'active' : ''} onClick={onChangeCurrMenu(2)}>
        + 점식
      </AddButton>
      {currMenu === 2 && <DiaryRecord />}
      <AddButton className={currMenu === 3 ? 'active' : ''} onClick={onChangeCurrMenu(3)}>
        + 저녁
      </AddButton>
      {currMenu === 3 && <DiaryRecord />}
      <AddButton className={currMenu === 4 ? 'active' : ''} onClick={onChangeCurrMenu(4)}>
        + 간식
      </AddButton>
      {currMenu === 4 && <DiaryRecord />}
    </FoodDiaryContainer>
  );
};

export default FoodDiary;
