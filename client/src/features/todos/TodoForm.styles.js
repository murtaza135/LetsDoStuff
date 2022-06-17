import styled from 'styled-components';
import { breakpoints } from 'constants';
import { Form } from 'global-components/form';
import { transitionName } from './TodoForm.constants';

export const TodoForm = styled(Form)`
  transition: all 0.5s ease;

  &.${transitionName}-enter {
    height: 0;
  }

  &.${transitionName}-enter-active {
    height: auto;
    transition: all 0.5s ease;
  }

  &.${transitionName}-exit {
    height: auto;
  }

  &.${transitionName}-exit-active {
    transition: all 0.5s ease;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: ${breakpoints.xs}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
