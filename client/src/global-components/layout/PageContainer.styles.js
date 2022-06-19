import styled from 'styled-components';

// @props $gap
const PageContainer = styled.div`
  width: 100%;
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ $gap }) => $gap || '2rem'};
`;

export default PageContainer;
