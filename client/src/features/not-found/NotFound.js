import React, { Fragment } from 'react';
import { Button } from 'global-components/ui';
import notFoundImg from './not_found.png';
import * as S from './NotFound.styles';

const NotFoundError = () => (
  <Fragment>
    <S.NotFoundImage src={notFoundImg} alt="Not Found" />
    <Button to="/" $color="secondary" $size="s" $bold $mt="2rem">Go to Dashboard</Button>
  </Fragment>
);

export default NotFoundError;
