import Image from 'next/image';
import PropTypes from 'prop-types';

import SimpleTask from '../SimpleTask/SimpleTask';
import ArrowIcon from '@/assets/icons/arrow-right.svg';
import CorrectIcon from '@/assets/icons/checkbox-checked.svg';
import WrongIcon from '@/assets/icons/cancel-circle.svg';

import styles from './styles.module.scss';

const TaskResult = ({ isCorectAnswer, task, closeHandler }) => {
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
  );
};

TaskResult.propTypes = {
  isCorectAnswer: PropTypes.bool,
  task: PropTypes.shape({
    first: PropTypes.number,
    operation: PropTypes.string,
    second: PropTypes.number,
    equal: PropTypes.number,
    taskId: PropTypes.string,
  }),
  closeHandler: PropTypes.func,
};

export default TaskResult;
