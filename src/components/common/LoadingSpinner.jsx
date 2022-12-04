import { LoadingSpinnerStyled } from './LoadingSpinner.styled';

//* isButton: 버튼크기 조정
const LoadingSpinner = ({ isButton, primary }) => (
  <LoadingSpinnerStyled isButton={isButton} primary={primary}>
    <div className="spinner" />
  </LoadingSpinnerStyled>
);

export default LoadingSpinner;
