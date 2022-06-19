import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import * as S from './FormDate.styles';
import 'react-datepicker/dist/react-datepicker.css';

const FormDate = ({ ...props }) => {
  const [fields, meta, { setValue }] = useField(props);
  const isError = !!(meta.touched && meta.error);
  const selectedDate = (fields.value && new Date(fields.value)) || (null);

  return (
    <S.FormDateContainer name={props.name} $error={isError}>
      <DatePicker
        {...fields}
        {...props}
        autoComplete="off"
        dateFormat="dd/MM/yyyy"
        selected={selectedDate}
        onChange={setValue}
      />
    </S.FormDateContainer>
  );
};

FormDate.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormDate;
