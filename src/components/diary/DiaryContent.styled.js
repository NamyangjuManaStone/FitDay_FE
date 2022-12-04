import styled from 'styled-components';

export const DiaryContentContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const DiaryContent = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DiaryContentButton = styled.button`
  width: 33%;
  background-color: white;
  padding: 10px 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  border: solid 0.5px #3f4b59;

  color: #3f4b59;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border-right-width: 0px;
  &:last-of-type {
    border-right-width: 0.5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &.active {
    background-color: #3f4b59;
    color: white;
  }
`;

export const DiaryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DiaryFlag = styled.div`
  border: solid 0.5px #3f4b59;
  border-radius: 5px;
  padding: 50px;
  width: 100%;
  height: auto;
`;
