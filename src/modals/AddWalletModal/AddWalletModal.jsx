import PropTypes from 'prop-types';
import Select from 'react-select';

import { WithModal } from '@/hocs';
import { WalletValueControls, DateComponent } from '@/composes';
import { PrimaryButton, SecondaryButton } from '@/components';

import styles from './styles.module.scss';

const AddWalletModal = ({
  modalHandler,
  date,
  setDate,
  value,
  setValue,
  category,
  setCategory,
  comment,
  commentHandler,
  saveHandler,
  defaultOptions,
}) => {
  return (
    <WithModal modalHandler={modalHandler} closeAfterClickOutside={false}>
      <div className={styles.container}>
        <button className={styles.closeBtn} onClick={modalHandler}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <h2>Додати запис</h2>
        <h3>Дата</h3>
        <div className={styles.item}>
          <DateComponent date={date} setDate={setDate} />
        </div>
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
          <textarea
            className={styles.commentSection}
            value={comment}
            onChange={commentHandler}
          />
        </div>
        <div className={styles.btnContainer}>
          <SecondaryButton text="Назад" onClick={modalHandler} />
          <PrimaryButton text="Зберегти" onClick={saveHandler} />
        </div>
      </div>
    </WithModal>
  );
};

AddWalletModal.propTypes = {
  modalHandler: PropTypes.func.isRequired,
  date: PropTypes.PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  commentHandler: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
  defaultOptions: PropTypes.array.isRequired,
};

export default AddWalletModal;
