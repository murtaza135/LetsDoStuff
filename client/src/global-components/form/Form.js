import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import * as S from './Form.styles';

const Form = React.forwardRef(({ nonSubmittableNodes, children, ...props }, ref) => {
  const formik = useFormikContext();

  const handleSubmit = (event) => {
    if (nonSubmittableNodes?.length > 0) {
      const areAllNodesNonActive = nonSubmittableNodes
        ?.every((node) => node.current !== document.activeElement);

      if (areAllNodesNonActive) {
        formik.handleSubmit(event);
      }

      event.preventDefault();
    } else {
      formik.handleSubmit(event);
    }
  };

  return (
    <S.FormikFormStyled ref={ref} {...props} onSubmit={handleSubmit}>{children}</S.FormikFormStyled>
  );
});

Form.defaultProps = {
  nonSubmittableNodes: [],
  children: null

};

Form.propTypes = {
  nonSubmittableNodes: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Form;
