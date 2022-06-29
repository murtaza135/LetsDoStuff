import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { widths, breakpoints, primaryTheme as theme } from 'constants';

// @props $stretch || $noBorder
export const FormikFormStyled = styled(FormikForm)`
  max-width: ${({ $stretch }) => ($stretch ? '1000rem' : widths.formContainer)};
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: ${({ $noBorder }) => ($noBorder ? 'none' : `2px solid ${theme.secondary}`)};
  border-radius: 5px;
  padding: 2.25rem 3.5rem 3rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 1.75rem 1.5rem 2.25rem;
  }
`;
