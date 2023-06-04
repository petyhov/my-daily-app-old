import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { appConfigAction } from '@/redux';

const AppConfigHost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appConfigAction.setDeviceWidth(window.innerWidth));
  }, [dispatch]);

  return <></>;
};

export default AppConfigHost;
