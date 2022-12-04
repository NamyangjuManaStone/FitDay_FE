import styled from 'styled-components';
export const DailyWeightContainer = styled.div`
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
  .comment {
    background-color: #3f4b59;
    border-radius: 5px;
    padding: 15px 0;
    &-box {
      text-align: center;
      color: white;
    }
    &-list {
      text-align: center;
      color: white;
    }
  }
  .weight {
    display: flex;
    flex-direction: column-reverse;
    &-list {
      display: flex;
      justify-content: space-between;
    }
  }
  .weightmodal {
    &-input {
      padding: 5px 0 5px 10px;
      width: 100%;
    }
    &-kg {
      margin-right: 10px;
    }
  }
`;
