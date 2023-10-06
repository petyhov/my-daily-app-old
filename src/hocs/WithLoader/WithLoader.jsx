import PropTypes from 'prop-types';

import { SunLoader } from '@/components';
import { useEffect, useState } from 'react';

const WithLoader = ({ isLoading, children }) => {
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    setTimeout(timerHandler, 1000);
  }, []);

  const timerHandler = () => {
    return setTimerComplete(true);
  };

  return <>{!isLoading && timerComplete ? children : <SunLoader />}</>;
};

WithLoader.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default WithLoader;
