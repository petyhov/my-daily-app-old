import PropTypes from 'prop-types';

import { AddButton, List } from '@/components';
import { AddWalletModal } from '@/modals';

import styles from './styles.module.scss';

const WalletPage = ({ list, tableHeaders, showAddModal, modalHandler }) => {
  return (
    <div className={styles.container}>
      {!!list.length ? (
        <List list={list} headers={tableHeaders} />
      ) : (
        <p className={styles.emptyData}>Дані відстні</p>
      )}
      <AddButton modalHandler={modalHandler} />
      {showAddModal && <AddWalletModal modalHandler={modalHandler} />}
    </div>
  );
};

WalletPage.propTypes = {
  list: PropTypes.array.isRequired,
  tableHeaders: PropTypes.array.isRequired,
  showAddModal: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default WalletPage;
