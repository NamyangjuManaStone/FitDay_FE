import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 11;
  padding: 20px 0;
  background-color: white;
  margin-bottom: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    &-logo {
      font-size: 28px;
      color: #3f4b59;
      font-weight: 800;
    }
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 18px;
  color: #3f4b59;
  font-weight: 700;
  a {
    color: #3f4b59;
    text-decoration: none;
    transition: all 250ms ease;
  }
  .logoutbtn {
    width: 100px;
  }
`;
