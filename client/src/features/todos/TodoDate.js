import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { format, endOfDay, isToday, isTomorrow, isYesterday } from 'date-fns';
import * as S from './TodoDate.styles';

const TodoDate = ({ date }) => {
  const dateParsed = endOfDay(date);

  let dateFormatted;
  if (isToday(dateParsed)) {
    dateFormatted = 'Today';
  } else if (isTomorrow(dateParsed)) {
    dateFormatted = 'Tomorrow';
  } else if (isYesterday(dateParsed)) {
    dateFormatted = 'Yesterday';
  } else {
    dateFormatted = format(dateParsed, 'do LLLL yyyy');
  }

  return (
    <S.TodoDateContainer>
      {dateFormatted}
    </S.TodoDateContainer>
  );
};

TodoDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default memo(TodoDate);
