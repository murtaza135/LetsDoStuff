import { css } from 'styled-components';

// @props $m | $mx | $my | $mt | $mr | $mb | $ml
const marginMixin = css`
  margin: ${({ $m }) => $m};
  margin-top: ${({ $mt, $my, $m }) => $mt || $my || $m};
  margin-right: ${({ $mr, $mx, $m }) => $mr || $mx || $m};
  margin-bottom: ${({ $mb, $my, $m }) => $mb || $my || $m};
  margin-left: ${({ $ml, $mx, $m }) => $ml || $mx || $m};
`;

export default marginMixin;
