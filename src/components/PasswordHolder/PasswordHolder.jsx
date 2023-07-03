import styles from './styles.module.scss';

const PasswordHolder = ({ password }) => {
  return (
    <div className={styles.container}>
      <h3>Пароль:</h3>
      <div className={styles.display}>{password}</div>
    </div>
  );
};

export default PasswordHolder;
