import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default PageContainer;
