import PropTypes from 'prop-types';

import { gamesConfig } from '@/configs';

import styles from './styles.module.scss';

const SecretItem = ({ secretValue }) => {
  const { simpleTaskTime } = gamesConfig;

  return (
    <div
      className={`${styles.secret} `}
      style={{ animationDuration: `${simpleTaskTime}ms` }}
    >
      <p>{secretValue}</p>
    </div>
  );
};

SecretItem.propTypes = {
  secretValue: PropTypes.string,
};

export default SecretItem;
