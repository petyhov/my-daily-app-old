import React, { useEffect } from 'react';
// import axios from 'axios';
// import styles from '@/styles/test.module.scss';

import Spinner from '@/components/Spinner';

const TestPage = () => {
  useEffect(() => {
    // fetch();
    // console.log(/^\d+$/.test('1234'));
  }, []);
  // const fetch = async () => {
  //   const res = await axios.get('/api/addCompleteTask');
  //   console.log(res);
  //   return res;
  // };
  return (
    <div>
      {/* <div className={styles.one}>TEST PAGE</div> */}
      <Spinner />
    </div>
  );
};

export default TestPage;
