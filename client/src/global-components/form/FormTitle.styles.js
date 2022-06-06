import styled from 'styled-components';
import { primaryTheme as theme } from 'constants';

const FormTitle = styled.h1`
  width: auto;
  align-self: flex-start;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid ${theme.primary};
  padding: 0 0.75rem 0.25rem 0.2rem;
`;

export default FormTitle;
