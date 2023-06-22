import Image from 'next/image';
import PropTypes from 'prop-types';

import CorrectIcon from '@/assets/icons/checkmark.svg';
import WrongIcon from '@/assets/icons/cross.svg';
import styles from './styles.module.scss';

const AnswersCount = ({ correctAnswerCount, wrongAnswerCount }) => {
  return (
    <div className={styles.container}>
      <Image width={20} height={20} src={CorrectIcon.src} alt="corect icon" />
      <p>{correctAnswerCount}</p>
      <Image width={20} height={20} src={WrongIcon.src} alt="wrong icon" />
      <p>{wrongAnswerCount}</p>
      <div className={styles.btnWrap}>
        <button className={styles.saveIconBtn}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button className={styles.trashIconBtn}>
          <i className={`fa-solid fa-trash`}></i>
        </button>
      </div>
    </div>
  );
};

AnswersCount.propTypes = {
  corectAnswerCount: PropTypes.number,
  wrongAnswerCount: PropTypes.number,
};

export default AnswersCount;
