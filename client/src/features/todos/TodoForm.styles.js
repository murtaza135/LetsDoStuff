import styled from 'styled-components';
import { breakpoints } from 'constants';
import AnimateHeight from 'react-animate-height';

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

export const AnimateHeightContainer = styled(AnimateHeight)`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
