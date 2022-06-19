import React from 'react';
import { TbChecklist } from 'react-icons/tb';
import { Text } from 'global-components/ui';
import { useLocation } from 'react-router-dom';
import * as S from './Navbar.styles';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <S.NavContainer>
      <S.NavContentContainer>
        <S.NavLogo to="/">
          <S.NavIcon element={TbChecklist} />
          <Text $size="m" $color="primary" $bold>LetsDoStuff</Text>
        </S.NavLogo>

        <S.NavOptions>
          <S.NavItem><S.NavLink to="/" $active={pathname === '/'}>Dashboard</S.NavLink></S.NavItem>
          <S.NavItem>
            <S.NavLink to="/login" $active={pathname === '/login'}>Login</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink to="/register" $active={pathname === '/register'}>Register</S.NavLink>
          </S.NavItem>
        </S.NavOptions>
      </S.NavContentContainer>
    </S.NavContainer>
  );
};

export default Navbar;
