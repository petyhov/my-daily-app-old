import styles from './styles.module.scss';

const LoginPage = ({ usersData }) => {
  return (
    <div className={styles.container}>
      {usersData.map((user) => (
        <button key={user.name} className={styles.userBtn}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default LoginPage;
