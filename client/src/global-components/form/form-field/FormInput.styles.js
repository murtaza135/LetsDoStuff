import styled from 'styled-components';
import { Field } from 'formik';
import { breakpoints, primaryTheme as theme } from 'constants';

const FormInput = styled(Field)`
  color: ${theme.secondary};
  background: ${theme.primaryShaded};
  border: ${({ error }) => (error ? `2px solid ${theme.danger}` : 'none')};
  border-radius: 5px;
  outline: none !important;
  padding: 0.75rem;
  font-size: 1.1rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;

export default FormInput;
