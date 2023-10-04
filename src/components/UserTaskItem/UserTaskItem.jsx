import styles from './styles.module.scss';

const UserTaskItem = ({ item, taskHandler }) => {
  return (
    <li className={styles.item}>
      <h3>{item.title}</h3>
      {/* <input type="checkbox" checked={item.isDone} /> */}
      <input type="checkbox" checked={item.isDone} />

      <span class={styles.checkmark} onClick={taskHandler(item)} />
    </li>
  );
};

export default UserTaskItem;
