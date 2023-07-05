import Image from 'next/image';
import PropTypes from 'prop-types';

import { TextModal } from '@/modals';

import CorrectIcon from '@/assets/icons/checkmark.svg';
import WrongIcon from '@/assets/icons/cross.svg';
import styles from './styles.module.scss';

const AnswersCount = ({
  correctAnswerCount,
  wrongAnswerCount,
  showClearModal,
  modalHandler,
  confirmModalAction,
}) => {
  return (
    <>
      <div className={styles.container}>
        <Image width={20} height={20} src={CorrectIcon.src} alt="corect icon" />
        <p>{correctAnswerCount}</p>
        <Image width={20} height={20} src={WrongIcon.src} alt="wrong icon" />
        <p>{wrongAnswerCount}</p>
        <div className={styles.btnWrap}>
          <button className={styles.trashIconBtn} onClick={modalHandler}>
            <i className={`fa-solid fa-trash`}></i>
          </button>
        </div>
      </div>
      {showClearModal && (
        <TextModal
          text="Очистити результат?"
          handler={modalHandler}
          action={confirmModalAction}
        />
      )}
    </>
  );
};

AnswersCount.propTypes = {
  correctAnswerCount: PropTypes.number,
  wrongAnswerCount: PropTypes.number,
  showClearModal: PropTypes.bool,
  modalHandler: PropTypes.func,
  confirmModalAction: PropTypes.func,
};

export default AnswersCount;
