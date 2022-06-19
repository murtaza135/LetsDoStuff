import styled from 'styled-components';
import { widths } from 'constants';

const Container = styled.div`
  display: block;
  width: 100%;
  max-width: ${widths.container};
  padding: 0 1.5rem;
  margin: auto;
`;

export default Container;
