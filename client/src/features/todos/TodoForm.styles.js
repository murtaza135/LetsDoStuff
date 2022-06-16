import styled from 'styled-components';
import { breakpoints } from 'constants';

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
