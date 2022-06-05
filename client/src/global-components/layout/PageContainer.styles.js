import styled from 'styled-components';
import { widths } from 'constants';

const PageContainer = styled.div`
  max-width: ${widths.container};
  padding: 2rem 1.5rem 3rem;
  margin: auto;
  width: 100%;
  & > * { width: 100%; }
  overflow: hidden;
  flex: 1 0 auto;
`;

export default PageContainer;
