import styled from 'styled-components';
import { FormInputStyled } from './FormInput.styles';

export const FormTextAreaStyled = styled(FormInputStyled).attrs((props) => ({
  ...props,
  as: 'textarea',
  $height: props.$height
}))`
  min-height: 5rem;
  max-height: 25rem;
  height: ${({ $height }) => $height};
  resize: vertical;
`;
