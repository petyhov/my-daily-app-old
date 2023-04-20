import styles from './styles.module.scss';

const SimpleTask = ({ task, secretItem, secretValue }) => {
  const { first, operation, second, equal } = task;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {secretItem !== 'first' ? (
          <li className={styles.item}>
            <p>{first}</p>
          </li>
        ) : (
          <li className={`${styles.secret} ${styles.item}`}>
            <p>{secretValue}</p>
          </li>
        )}
        <li className={styles.item}>
          <p>{operation === 'plus' ? '+' : '-'}</p>
        </li>
        {secretItem !== 'second' ? (
          <li className={styles.item}>
            <p>{second}</p>
          </li>
        ) : (
          <li className={`${styles.secret} ${styles.item}`}>
            <p>{secretValue}</p>
          </li>
        )}
        <li className={styles.item}>
          <p>=</p>
        </li>
        {secretItem !== 'equal' ? (
          <li className={styles.item}>
            <p>{equal}</p>
          </li>
        ) : (
          <li className={`${styles.secret} ${styles.item}`}>
            <p>{secretValue}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SimpleTask;
