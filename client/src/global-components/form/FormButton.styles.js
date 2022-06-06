import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';

const FormButton = styled.button`
  font-size: 1.025rem;
  margin-top: 1rem;
  padding: 0.65rem 1.5rem;
  color: ${theme.light};
  background: ${theme.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

export default FormButton;
