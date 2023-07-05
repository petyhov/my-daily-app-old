import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { appConfigAction, getUserData } from '@/redux';

const AppConfigHost = () => {
  const userData = useSelector(getUserData);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appConfigAction.setDeviceWidth(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    if (router.route !== '/login' && !userData.name) {
      router.push('/login');
    }

    dispatch(appConfigAction.setShowSidebar(false));
  }, [router, dispatch, userData]);

  return <></>;
};

export default AppConfigHost;
