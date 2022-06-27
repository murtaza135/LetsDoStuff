import styled from 'styled-components';
import spinnerImage from './Spinner.gif';
import Text from '../text/Text.styles';

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export const Spinner = styled.img.attrs(() => ({
  src: spinnerImage
}))`
  display: block;
  width: ${({ $size }) => $size || '75px'};
`;

export const SpinnerText = styled(Text).attrs(() => ({
  $color: 'secondary'
}))`
  font-size: 1.15rem;
`;
