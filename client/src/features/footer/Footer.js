import React from 'react';
import { Text } from 'global-components/ui';
import { socialItems } from './Footer.data';
import * as S from './Footer.styles';

const Footer = () => (
  <S.FooterContainer>
    <S.FooterContentContainer>
      <Text $alignment="center" $color="primary" $bold>
        Copyright &#169; {new Date().getFullYear()}. All Rights Reserved.
      </Text>

      <S.SocialOptions>
        {socialItems.map(({ name, href, reactIcon }) => (
          <S.SocialItem key={name}>
            <S.SocialAnchor href={href}>
              {React.createElement(reactIcon)}
            </S.SocialAnchor>
          </S.SocialItem>
        ))}
      </S.SocialOptions>
    </S.FooterContentContainer>
  </S.FooterContainer>
);

export default Footer;
