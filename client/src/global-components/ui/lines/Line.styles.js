import { primaryTheme as theme } from 'constants';
import styled from 'styled-components';

// @props $stretch || $color
const Line = styled.div`
  display: block;
  height: 2px;
  width: ${({ $stretch }) => ($stretch ? '100%' : '7rem')};
  background: ${({ $color }) => ($color || theme.secondary)};
  margin: 1.25rem auto;
`;

export default Line;
