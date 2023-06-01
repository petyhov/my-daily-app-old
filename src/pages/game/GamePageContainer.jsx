import { useEffect, useState } from 'react';

import { fetchMathTasks } from '@/utils';

import GamePage from './GamePage';

const GamePageContainer = (props) => {
  const [mathTasks, setMathTasks] = useState([]);

  useEffect(() => {
    fetchMathTasks().then((data) => {
      if (data) {
        setMathTasks(data);
      }
    });
  }, []);

  return <GamePage {...props} mathTasks={mathTasks} />;
};

export default GamePageContainer;
