import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'global-components/layout';
import { breakpoints, sizes, primaryTheme as theme } from 'constants';

export const NavContainer = styled.nav`
  display: block;
  overflow: hidden;
  min-height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${theme.secondary};
  color: ${theme.primary};
  z-index: 5;
  padding: 1rem 1.5rem;
  margin-bottom: 5rem;

  @media screen and  (max-width: ${breakpoints.sm}) {
    min-height: 135px;
  }
`;

export const NavContentContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0;

  @media screen and (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavLogo = styled(Link)`
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin: 0.3rem 0 0.65rem;
  }
`;

export const NavLogoIcon = styled(({ element, children, ...props }) => (
  React.createElement(element, props, children)
))`
  font-size: ${sizes.xxl};
  color: ${theme.primary};

  @media screen and (max-width: ${breakpoints.xs}) {
    font-size: ${sizes.xl};
  }
`;

export const NavOptions = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-right: 1rem;
  gap: 1.5rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-right: 0;
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    gap: 0.5rem;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavIcon = styled(({ element, children, ...props }) => (
  React.createElement(element, props, children)
))`
  color: ${theme.primary};
  font-size: 1.75rem;
  transform: translateY(5px);
  cursor: pointer;
  transition: opacity 0.25s ease, transform 0.25s ease;

  &:hover {
    opacity: 0.7;
    transform: translateY(5px) scale(1.2);
  }
`;

export const NavLink = styled(Link).attrs((props) => ({
  ...props,
  $active: props.$active
}))`
  display: block;
  color: ${theme.primary};
  font-size: ${sizes.s};
  font-weight: bold;
  padding: 0.2rem 0.5rem 0.4rem;
  border: none;
  border-bottom: 3px solid ${({ $active }) => ($active ? theme.primary : 'transparent')};
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
      border-color: ${theme.primaryShaded};
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    font-size: ${sizes.xs};
  }
`;
