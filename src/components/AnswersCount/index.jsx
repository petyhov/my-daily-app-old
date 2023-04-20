import Image from 'next/image';
import styles from './styles.module.scss';

import CorrectIcon from '@/assets/icons/checkmark.svg';
import WrongIcon from '@/assets/icons/cross.svg';

const AnswersCount = ({ corectAnswerCount, wrongAnswerCount }) => {
  return (
    <div className={styles.container}>
      <Image width={20} height={20} src={CorrectIcon.src} alt="corect icon" />
      <p>{corectAnswerCount}</p>
      <Image width={20} height={20} src={WrongIcon.src} alt="wrong icon" />
      <p>{wrongAnswerCount}</p>
    </div>
  );
};

export default AnswersCount;
