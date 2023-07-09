import styles from './styles.module.scss';

const AddButton = () => {
  return (
    <button className={styles.addButton}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

export default AddButton;
