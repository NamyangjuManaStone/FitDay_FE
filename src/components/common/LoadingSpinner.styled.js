import styled from 'styled-components';

export const LoadingSpinnerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .spinner {
    width: ${({ isButton }) => (isButton ? '30px' : '50px')};
    height: ${({ isButton }) => (isButton ? '30px' : '50px')};
    border-radius: 50%;
    border: ${({ isButton }) => (isButton ? '3px' : '5px')} solid
      ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.gray_ea)};
    border-bottom: ${({ isButton }) => (isButton ? '3px' : '5px')} solid transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
