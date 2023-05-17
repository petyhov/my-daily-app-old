import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const res = await axios.get('/api/getTasks');
    console.log('RESPONSE', res.data.tasks);
  } catch (e) {
    alert('something went wraong');
  }
};

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
