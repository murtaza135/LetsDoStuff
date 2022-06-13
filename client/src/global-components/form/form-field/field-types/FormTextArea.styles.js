import styled from 'styled-components';
import FormInput from './FormInput.styles';

const FormTextArea = styled(FormInput).attrs((props) => ({
  ...props,
  as: 'textarea',
  $height: props.$height
}))`
  min-height: 5rem;
  max-height: 25rem;
  height: ${({ $height }) => $height};
  resize: vertical;
`;

export default FormTextArea;
