import { css } from 'styled-components';
import marginMixin from './margin.mixin';
import paddingMixin from './padding.mixin';

// @props $m | $mx | $my | $mt | $mr | $mb | $ml
// @props $p | $px | $py | $pt | $pr | $pb | $pl
const spacerMixin = css`
  ${marginMixin};
  ${paddingMixin};
`;

export default spacerMixin;
