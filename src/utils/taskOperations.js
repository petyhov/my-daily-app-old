import axios from 'axios';

export const addTaskToMongo = (task, secretItem, secretValue, checkAnswer) => {
  const { operation } = task;

  const checkForX = (numberName) => {
    return numberName === secretItem ? 'X' : task[numberName];
  };

  const secretTask = `${checkForX('first')}${
    operation === 'plus' ? '+' : '-'
  }${checkForX('second')}=${checkForX('equal')}`;

  try {
    axios.post('/api/addCompleteTask', {
      secretTask,
      secretValue,
      checkAnswer,
    });
  } catch (e) {
    alert('something went wrong');
  }
};
