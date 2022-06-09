import styled from 'styled-components';

// @props $posX || $posY
const PageContainer = styled.div.attrs((props) => ({
  ...props,
  $posX: props.$posX || 'center',
  $posY: props.$posY || 'start'
}))`
  width: 100%;
  & > * { width: 100%; }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $posY }) => $posY};
  align-items: ${({ $posX }) => $posX};
`;

export default PageContainer;
