import styled from 'styled-components';
import { sizes } from 'constants';
import { noSelectMixin } from 'global-components/other';

export const TodoDateContainer = styled.div`
  ${noSelectMixin};
  font-size: ${sizes.s};
  transform: translateY(-1px);
`;
