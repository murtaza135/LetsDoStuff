import React from 'react';
import { TbChecklist } from 'react-icons/tb';
import { Text } from 'global-components/ui';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentToken } from 'features/auth/auth.selectors';
import { logout } from 'features/auth/auth.slice';
import { publicNavItems, privateNavItems } from './Navbar.data';
import * as S from './Navbar.styles';

const Navbar = () => {
  const { pathname } = useLocation();
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.NavContainer>
      <S.NavContentContainer>
        <S.NavLogo to="/">
          <S.NavIcon element={TbChecklist} />
          <Text $size="m" $color="primary" $bold>LetsDoStuff</Text>
        </S.NavLogo>

        <S.NavOptions>
          {token
            ? privateNavItems.map(({ name, href }) => (
              <S.NavItem>
                <S.NavLink to={href} $active={pathname === href}>{name}</S.NavLink>
              </S.NavItem>
            ))
            : publicNavItems.map(({ name, href }) => (
              <S.NavItem>
                <S.NavLink to={href} $active={pathname === href}>{name}</S.NavLink>
              </S.NavItem>
            ))}

          {token && (
            <S.NavItem>
              <S.NavLink as="p" onClick={handleLogout}>Logout</S.NavLink>
            </S.NavItem>
          )}
        </S.NavOptions>
      </S.NavContentContainer>
    </S.NavContainer>
  );
};

export default Navbar;
