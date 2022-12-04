import styled from 'styled-components';

export const DiaryHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiaryDate = styled.div`
  font-size: 24px;
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

export const DiaryGoal = styled.div`
  width: 240px;
  padding: 10px 20px;
  border: solid 1px #3f4b59;
  border-radius: 5px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
`;
