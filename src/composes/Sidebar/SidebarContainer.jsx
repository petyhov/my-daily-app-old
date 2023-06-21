import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { isShowSidebar } from '@/redux';

import SideBar from './Sidebar';

const SidebarContainer = () => {
  const isShow = useSelector((state) => isShowSidebar(state));
  const router = useRouter();

  return <SideBar isShow={isShow} route={router.route} />;
};

export default SidebarContainer;
