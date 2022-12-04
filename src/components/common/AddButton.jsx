import { memo } from 'react';
import * as S from './AddButton.styled';

const AddButton = ({ children, ...props }) => {
  return <S.AddButtonLayout {...props}>{children}</S.AddButtonLayout>;
};

export default memo(AddButton);
