import React from 'react';
import { TbChecklist } from 'react-icons/tb';
import { Text } from 'global-components/ui';
import * as S from './Navbar.styles';

const Navbar = () => (
  <S.NavContainer>
    <S.NavContentContainer>
      <S.NavLogo to="/">
        <S.NavIcon reactIcon={TbChecklist} />
        <Text size="m" color="primary" bold>LetsDoStuff</Text>
      </S.NavLogo>

      <S.NavOptions>
        <S.NavItem><S.NavLink to="/">Dashboard</S.NavLink></S.NavItem>
        <S.NavItem><S.NavLink to="/login" active>Login</S.NavLink></S.NavItem>
        <S.NavItem><S.NavLink to="/register">Register</S.NavLink></S.NavItem>
      </S.NavOptions>
    </S.NavContentContainer>
  </S.NavContainer>
);

export default Navbar;
