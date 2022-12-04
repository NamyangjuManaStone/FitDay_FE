import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  .footer {
    &-img {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-intro {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
  }
`;
