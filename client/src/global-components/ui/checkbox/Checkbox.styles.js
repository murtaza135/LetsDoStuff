import styled from 'styled-components';
import { breakpoints, primaryTheme as theme } from 'constants';

export const CheckboxContainer = styled.div`
  color: ${theme.secondary};
  background-color: ${theme.primaryShaded};
  border: ${({ $noBorder }) => ($noBorder ? null : `1px solid ${theme.secondary}`)};
  border-radius: 5px;
  outline: none !important;
  font-size: 1.1rem;
  width: ${({ $stretch }) => ($stretch ? '100%' : 'auto')};

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 1.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0.65rem;
  cursor: pointer;
  overflow: hidden;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

export const FormCheckboxInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${theme.primaryShaded};
  border: 2px solid ${theme.secondary};
  color: ${theme.secondary};
  padding: 9.5px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.875;
  }

  &:checked:after {
    content: "✓";
    position: absolute;
    top: 0px;
    left: 4px;
    font-size: 14px;
    font-weight: bold;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 8.5px;

    &:checked:after {
      top: -1px;
      left: 3px;
    }
  }
`;
