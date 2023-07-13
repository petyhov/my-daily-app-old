import { useState } from 'react';
import DatePicker from 'react-datepicker';

const DateComponentContainer = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DateComponentContainer;
