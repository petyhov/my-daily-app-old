import PropTypes from 'prop-types';
import Select from 'react-select';

import { WithModal } from '@/hocs';
import { WalletValueControls, DateComponent } from '@/composes';

import styles from './styles.module.scss';

const AddWalletModal = ({
  handler,
  value,
  setValue,
  category,
  setCategory,
  comment,
  defaultOptions,
}) => {
  return (
    <WithModal handler={handler} closeAfterClickOutside={false}>
      <div className={styles.container}>
        <button className={styles.closeBtn} onClick={handler}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <h2>Додати запис</h2>
        <h3>Дата</h3>
        <DateComponent />
        <h3>Значення</h3>
        <div className={styles.item}>
          <WalletValueControls value={value} setValue={setValue} />
          <p className={styles.currency}>грн</p>
        </div>
        <h3>Категорія</h3>
        <div className={styles.item}>
          <Select
            className={styles.select}
            isSearchable={false}
            options={defaultOptions}
            value={category}
            placeholder="Вибери категорію"
            onChange={setCategory}
          />
        </div>
        <h3>Коментар</h3>
        <div className={styles.item}>
          <textarea className={styles.commentSection} value={comment} />
        </div>
      </div>
    </WithModal>
  );
};

AddWalletModal.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired,
  comment: PropTypes.func.isRequired,
  defaultOptions: PropTypes.array.isRequired,
};

export default AddWalletModal;
