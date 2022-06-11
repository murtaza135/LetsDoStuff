/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

const FormDate = ({ ...props }) => {
  const [field, , { setValue }] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
};

FormDate.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string
};

export default FormDate;
