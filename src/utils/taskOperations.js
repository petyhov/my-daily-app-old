import axios from 'axios';

export const addTaskToMongo = (task, secretValue, rightAnswer, checkAnswer) => {
  try {
    axios.post('/api/addCompleteTask', {
      task,
      secretValue,
      rightAnswer,
      checkAnswer,
    });
  } catch (e) {
    alert('something went wraong');
  }
};
