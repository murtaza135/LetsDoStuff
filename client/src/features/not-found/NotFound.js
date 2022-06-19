import React, { Fragment } from 'react';
import { Button } from 'global-components/ui';
import notFoundImg from './not_found.png';

const NotFoundError = () => (
  <Fragment>
    <img src={notFoundImg} alt="Not Found" />
    <Button to="/" $color="secondary" $size="s" $bold $mt="2rem">Go to Dashboard</Button>
  </Fragment>
);

export default NotFoundError;
