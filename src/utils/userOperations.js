import Router from 'next/router';

import axios from 'axios';

export const postPassword = async (password, userName) => {
  try {
    const res = await axios.post('/api/checkUserData', { password, userName });
    if (res.data.loggedIn) {
      Router.push('/game');
    }
  } catch (e) {
    if (e.response.status === 400) {
      return alert(e.response.data.error);
    }
    alert('something went wraong');
  }
};
