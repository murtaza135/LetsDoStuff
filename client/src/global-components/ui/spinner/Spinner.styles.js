import styled from 'styled-components';
import spinner from './Spinner.gif';

// @props src || alt
const Spinner = styled.img.attrs(() => ({
  src: spinner,
  alt: 'Loading...'
}))`
  display: block;
  margin: 2.5rem auto;
  width: 200px;
`;

export default Spinner;
