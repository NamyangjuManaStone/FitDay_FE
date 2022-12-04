import styled from 'styled-components';

export const LoginModalContainer = styled.div`
  .loginmodal {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 480px;
    height: auto;
    &-info {
      font-size: 26px;
    }
    &-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      input {
        width: 100%;
        height: 35px;
        padding: 5px 0 0 10px;
        font-size: 16px;
      }
      &-lgbtn {
        width: 100%;
        height: 35px;
        font-size: 18px;
        background-color: black;
        color: white;
      }
      span {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
  .change {
    cursor: pointer;
  }
`;
