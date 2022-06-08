import styled from 'styled-components';
import { widths } from 'constants';

const Container = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  max-width: ${widths.container};
  padding: 2rem 1.5rem 3rem;
  margin: auto;
  overflow: hidden;
`;

export default Container;
