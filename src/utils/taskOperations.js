import axios from 'axios';

export const fetchAllMathTasks = async () => {
  try {
    const response = await axios.get('/api/fetchAllMathTasks');
    return response.data.length > 0 ? response.data : [];
  } catch (e) {
    alert('something went wrong');
  }
};

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
