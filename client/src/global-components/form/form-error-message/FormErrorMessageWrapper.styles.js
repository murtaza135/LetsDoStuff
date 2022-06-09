import styled from 'styled-components';
import { primaryTheme as theme } from 'constants';

const FormErrorMessageWrapper = styled.p`
  font-size: 0.8rem;
  padding: 0 0.25rem;
  color: ${theme.danger};
  transform: translateY(-5px);
`;

export default FormErrorMessageWrapper;
