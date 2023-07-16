import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const PrimaryButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PrimaryButton;
