import styled from 'styled-components';

// @props $posX || $posY
const PageContainer = styled.div.attrs((props) => ({
  ...props,
  $posX: props.$posX || 'center',
  $posY: props.$posY || 'start',
  $gap: props.$gap || '2rem'
}))`
  width: 100%;
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: ${({ $posY }) => $posY};
  align-items: ${({ $posX }) => $posX};
  gap: ${({ $gap }) => $gap};
`;

export default PageContainer;
