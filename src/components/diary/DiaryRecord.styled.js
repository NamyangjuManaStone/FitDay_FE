import styled from 'styled-components';

export const DiaryRecordLayout = styled.div`
  .record-box {
    border: solid 0.5px #3f4b59;
    border-radius: 5px;

    height: 400px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    &__input {
      position: sticky;
      top: 0;
      background-color: white;
      padding: 15px;
      &-box {
        width: 100%;
        padding: 10px;
      }
    }
    &__check {
      display: flex;
      flex-direction: column;
      &-list {
        padding: 10px 0 0 20px;
      }
    }
    .check {
      margin-right: 15px;
    }
    &__total {
      border-top: solid 0.5px #3f4b59;
      display: flex;
      gap: 15px;
      justify-content: flex-end;
      position: sticky;
      bottom: 0;
      background-color: white;
      padding: 15px;
      &-button {
        width: 120px;
        height: 40px;
        border: solid 0.5px #3f4b59;
        border-radius: 5px;
        background-color: transparent;
      }
    }
  }
`;
