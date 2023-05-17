import { gamesConfig } from '@/configs';

import styles from './styles.module.scss';

const SecretItem = ({ secretValue }) => {
  const { simpleTaskTime } = gamesConfig;

  return (
    <li
      className={`${styles.secret} ${styles.item}`}
      style={{ animationDuration: `${simpleTaskTime}ms` }}
    >
      <p>{secretValue}</p>
    </li>
  );
};

export default SecretItem;
