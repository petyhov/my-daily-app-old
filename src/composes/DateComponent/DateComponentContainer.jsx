import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const DateComponentContainer = ({ date, setDate }) => {
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        customInput={<input className={styles.customInput} />}
      />
    </div>
  );
};

DateComponentContainer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DateComponentContainer;
