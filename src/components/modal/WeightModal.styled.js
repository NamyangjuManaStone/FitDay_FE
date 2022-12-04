import styled from 'styled-components';

export const WeightModalContainer = styled.div`
  width: 100%;
  .modal {
    .comment {
      display: flex;
      flex-direction: column;
      background-color: transparent;
      &-list {
        color: black;
        display: flex;
        gap: 5px;
        justify-content: flex-end;
      }
    }
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    .weightmodal {
      width: 90%;
      max-width: 450px;
      margin: 0 auto;
      border-radius: 0.3rem;
      background-color: #fff;
      animation: modal-show 0.3s;
      overflow: hidden;
      &-header {
        position: relative;
        padding: 16px 0px 0px 16px;
        font-weight: 700;
        &__close {
          position: absolute;
          top: 5px;
          right: 0px;
          width: 30px;
          font-size: 21px;
          font-weight: 700;
          text-align: center;
          color: #999;
          background-color: transparent;
        }
      }
      &-input {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 15px 0 15px 0;
      }
      &-footer {
        padding: 0 16px 12px 0;
        text-align: right;
        &__close {
          padding: 6px 12px;
          color: #fff;
          background-color: #6c757d;
          border-radius: 5px;
          font-size: 13px;
        }
      }
    }
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
