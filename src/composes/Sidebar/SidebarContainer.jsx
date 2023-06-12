import { useSelector } from 'react-redux';

import { isShowSidebar } from '@/redux';

import SideBar from './Sidebar';

const SidebarContainer = () => {
  const isShow = useSelector((state) => isShowSidebar(state));

  return <SideBar isShow={isShow} />;
};

export default SidebarContainer;
