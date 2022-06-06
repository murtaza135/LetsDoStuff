import styled from 'styled-components';
import FormInput from './FormInput.styles';

const FormTextArea = styled(FormInput).attrs((props) => ({
  ...props,
  as: 'textarea'
}))`
  min-height: 5rem;
  max-height: 25rem;
  resize: vertical;
`;

export default FormTextArea;
