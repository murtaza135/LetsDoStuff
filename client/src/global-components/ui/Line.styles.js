import { primaryTheme } from 'constants';
import styled from 'styled-components';

const Line = styled.div`
  display: block;
  height: 2px;
  width: ${({ stretch }) => (stretch ? '100%' : '7rem')};
  background: ${({ color }) => (color || primaryTheme.secondary)};
  margin: 1.25rem auto;
`;

export default Line;
