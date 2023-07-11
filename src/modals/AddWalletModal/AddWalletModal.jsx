import PropTypes from 'prop-types';
import Select from 'react-select';

import { WithModal } from '@/hocs';
import { WalletValueControls } from '@/composes';

import styles from './styles.module.scss';

const AddWalletModal = ({
  handler,
  value,
  setValue,
  category,
  comment,
  defaultOptions,
}) => {
  return (
    <WithModal handler={handler} closeAfterClickOutside={false}>
      <div className={styles.container}>
        <h2>Додати запис</h2>
        <h3>Значення</h3>
        <div className={styles.item}>
          <WalletValueControls value={value} setValue={setValue} />
          <p className={styles.currency}>грн</p>
        </div>
        <h3>Категорія</h3>
        <div className={styles.item}>
          <Select options={defaultOptions} value={category} />
        </div>
        <h3>Коментар</h3>
        <div className={styles.item}>
          <textarea value={comment} />
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
  comment: PropTypes.func.isRequired,
  defaultOptions: PropTypes.array.isRequired,
};

export default AddWalletModal;
