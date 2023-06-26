import PropTypes from 'prop-types';

import { WithModal } from '@/hocs';

import styles from './styles.module.scss';

const TextModal = ({ text, handler, action }) => {
  return (
    <WithModal>
      <div className={styles.container}>
        <h2>{text}</h2>
        <div className={styles.btnWrap}>
          <button className={styles.cancelBtn} onClick={handler}>
            Ні
          </button>
          <button className={styles.actionBtn} onClick={action}>
            Так
          </button>
        </div>
      </div>
    </WithModal>
  );
};

TextModal.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
  action: PropTypes.func,
};

export default TextModal;
