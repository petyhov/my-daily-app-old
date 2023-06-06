import axios from 'axios';

export const fetchStatistics = async () => {
  try {
    const res = await axios.get('/api/fetchStatistics');
    return res.data.tasks;
  } catch (e) {
    alert('something went wraong');
  }
};
