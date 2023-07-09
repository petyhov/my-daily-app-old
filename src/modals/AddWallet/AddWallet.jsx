import PropTypes from 'prop-types';
import Select from 'react-select';

import { WithModal } from '@/hocs';

import styles from './styles.module.scss';

const AddWallet = ({ handler, defaultOptions }) => {
  return (
    <WithModal handler={handler} closeAfterClickOutside={false}>
      <div className={styles.container}>
        <h2>Додати запис</h2>
        <h3>Значення</h3>
        <div className={styles.item}>
          <p>5000 грн</p>
        </div>
        <h3>Категорія</h3>
        <div className={styles.item}>
          <Select options={defaultOptions} />
        </div>
        <h3>Коментар</h3>
        <div className={styles.item}></div>
      </div>
    </WithModal>
  );
};

AddWallet.propTypes = {
  handler: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  defaultOptions: PropTypes.array.isRequired,
};

export default AddWallet;
