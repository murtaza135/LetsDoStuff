import styled from 'styled-components';
import spacerMixin from './spacer.mixin';

// @props $m | $mx | $my | $mt | $mr | $mb | $ml
// @props $p | $px | $py | $pt | $pr | $pb | $pl
const Spacer = styled.span`
  ${spacerMixin};
`;

export default Spacer;
