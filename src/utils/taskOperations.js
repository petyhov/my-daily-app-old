import axios from 'axios';

export const addTaskToMongo = (task, rightAnswer, checkAnswer) => {
  try {
    axios.post('/api/addCompleteTask', {
      task,
      rightAnswer,
      checkAnswer,
    });
  } catch (e) {
    alert('something went wraong');
  }
};
