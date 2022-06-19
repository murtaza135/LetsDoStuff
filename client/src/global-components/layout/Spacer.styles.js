import styled, { css } from 'styled-components';

const marginCSS = css`
  margin: ${({ $m }) => $m};
  margin-top: ${({ $mt, $my, $m }) => $mt || $my || $m};
  margin-right: ${({ $mr, $mx, $m }) => $mr || $mx || $m};
  margin-bottom: ${({ $mb, $my, $m }) => $mb || $my || $m};
  margin-left: ${({ $ml, $mx, $m }) => $ml || $mx || $m};
`;

const paddingCSS = css`
  padding: ${({ $p }) => $p};
  padding-top: ${({ $pt, $py, $p }) => $pt || $py || $p};
  padding-right: ${({ $pr, $px, $p }) => $pr || $px || $p};
  padding-bottom: ${({ $pb, $py, $p }) => $pb || $py || $p};
  padding-left: ${({ $pl, $px, $p }) => $pl || $px || $p};
`;

// @props $m | $mx | $my | $mt | $mr | $mb | $ml
// @props $p | $px | $py | $pt | $pr | $pb | $pl
export const spacerCSS = css`
  ${marginCSS};
  ${paddingCSS};
`;

// @props $m | $mx | $my | $mt | $mr | $mb | $ml
// @props $p | $px | $py | $pt | $pr | $pb | $pl
export const Spacer = styled.span`
  ${marginCSS};
  ${paddingCSS};
`;
