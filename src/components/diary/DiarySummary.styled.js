import styled from 'styled-components';
export const DiarySummaryContainer = styled.div`
  border: solid 0.5px #3f4b59;
  border-radius: 5px;
  width: 25%;
  height: 770px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .summary {
    display: flex;
    flex-direction: column;
  }
  .kcal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    &-cal {
      display: flex;
      width: 60%;
      justify-content: space-between;
    }
  }
  .comment {
    display: flex;
    flex-direction: column;
    gap: 5px;
    &-box {
      border: solid 0.5px #3f4b59;
      border-radius: 5px;
      padding: 15px 0;
      text-align: center;
    }
  }
`;
