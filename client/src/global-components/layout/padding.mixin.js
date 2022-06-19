import { css } from 'styled-components';

// @props $p | $px | $py | $pt | $pr | $pb | $pl
const paddingMixin = css`
  padding: ${({ $p }) => $p};
  padding-top: ${({ $pt, $py, $p }) => $pt || $py || $p};
  padding-right: ${({ $pr, $px, $p }) => $pr || $px || $p};
  padding-bottom: ${({ $pb, $py, $p }) => $pb || $py || $p};
  padding-left: ${({ $pl, $px, $p }) => $pl || $px || $p};
`;

export default paddingMixin;
