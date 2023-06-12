import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { appConfigAction } from '@/redux';

const AppConfigHost = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appConfigAction.setDeviceWidth(window.innerWidth));
  }, [dispatch]);

  useEffect(() => {
    dispatch(appConfigAction.setShowSidebar(false));
  }, [router, dispatch]);

  return <></>;
};

export default AppConfigHost;
