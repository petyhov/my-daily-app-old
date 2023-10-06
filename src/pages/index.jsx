import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { routes } from '@/configs';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.userTasks);
  }, [router]);

  return <></>;
};

export default Home;
