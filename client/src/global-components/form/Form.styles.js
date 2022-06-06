import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { breakpoints, primaryTheme as theme } from 'constants';

const Form = styled(FormikForm)`
  max-width: ${({ stretch }) => (stretch ? '1000rem' : '37.5rem')};
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;

  border: ${({ noBorder }) => (noBorder ? 'none' : `2px solid ${theme.primary}`)};
  border-radius: 5px;
  padding: 2.25rem 3.5rem 3rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 1.75rem 1.5rem 2.25rem;
  }
`;

export default Form;
