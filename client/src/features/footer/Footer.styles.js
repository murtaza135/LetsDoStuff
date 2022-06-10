import styled from 'styled-components';
import { Container } from 'global-components/layout';
import { sizes, primaryTheme as theme } from 'constants';

export const FooterContainer = styled.footer`
  background: ${theme.secondary};
  margin-top: 6rem;
  flex-shrink: 0;
`;

export const FooterContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  padding: 1.7rem 1rem;
`;

export const SocialOptions = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const SocialItem = styled.li`
  display: inline-block;
`;

export const SocialAnchor = styled.a`
  display: grid;
  place-items: center;

  color: ${theme.primary};
  font-size: ${sizes.m};
  border: 2px solid ${theme.primary};
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.25);
  }
`;
