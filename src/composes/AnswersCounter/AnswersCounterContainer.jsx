import { useSelector } from 'react-redux';

import { getAnswersCounterData } from '@/redux';

import AnswersCount from './AnswersCounter';

const AnswersCountContainer = () => {
  const data = useSelector(getAnswersCounterData);

  return <AnswersCount {...data} />;
};

export default AnswersCountContainer;
