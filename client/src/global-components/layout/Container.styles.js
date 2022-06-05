import styled from 'styled-components';
import { widths } from 'constants';

const Container = styled.div`
  display: block;
  max-width: ${widths.container};
  height: 100%;
  padding: 0 1.5rem;
  margin: auto;
  overflow: hidden;
`;

export default Container;
