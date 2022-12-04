import styled from 'styled-components';

export const EnterPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 300px;

  .enter {
    &-button {
      width: 280px;
      height: 35px;
    }
    &-intro {
      width: 280px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    .modal-baackground {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      z-index: 10;
    }
    .modal-contents {
      width: 400px;
      height: 400px;
      background-color: white;
      border: solid 1px;
      z-index: 11;
    }
  }
`;
