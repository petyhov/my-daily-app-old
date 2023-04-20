import axios from 'axios';

const fetchMathTasks = async () => {
  try {
    const response = await axios.get('/api/mathTasksApi');
    return response.data.length > 0 ? response.data : [];
  } catch (e) {
    alert('something went wraong');
  }
};

export default fetchMathTasks;
