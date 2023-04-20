import Image from 'next/image'
import SimpleTask from '../SimpleTask'

import ArrowIcon from '@/assets/icons/arrow-right.svg'
import CorrectIcon from '@/assets/icons/checkbox-checked.svg'
import WrongIcon from '@/assets/icons/cancel-circle.svg'

import styles from './styles.module.scss'

const AnswerModal = ({ isCorectAnswer, task, closeHandler }) => {
  return (
    <>
      <div className={styles.logoWrap}>
        <Image
          width={120}
          height={120}
          src={isCorectAnswer ? CorrectIcon.src : WrongIcon.src}
          alt="answer icon"
        />
      </div>
      <SimpleTask task={task} />
      <button
        className={`${styles.nextBtn} ${
          isCorectAnswer ? styles.corect : styles.wrong
        }`}
        onClick={closeHandler}
      >
        <Image
          width={ArrowIcon.width}
          height={ArrowIcon.height}
          src={ArrowIcon.src}
          alt="next"
        />
      </button>
    </>
  )
}

export default AnswerModal
