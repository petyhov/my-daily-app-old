import { useState, useEffect } from 'react';

import { walletData } from '@/data';
import { transformHeadersName, transformDataForList } from '@/utils';

import WalletPage from './WalletPage';

const walletTableHeaders = [
  { name: 'Дата', resName: 'date' },
  { name: 'Значення', resName: 'value' },
  { name: 'Категорія', resName: 'category' },
  { name: 'Імʼя', resName: 'name' },
];

const WalletPageContainer = () => {
  const [walletList, setWalletList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const transformedData = walletData.map((item) => {
      return transformDataForList(item, walletTableHeaders);
    });
    setWalletList(transformedData);
  }, []);

  const modalHandler = (e) => {
    e.stopPropagation();
    return setShowAddModal(!showAddModal);
  };

  const tableHeadersNames = transformHeadersName(walletTableHeaders);

  return (
    <WalletPage
      list={walletList}
      tableHeaders={tableHeadersNames}
      showAddModal={showAddModal}
      modalHandler={modalHandler}
    />
  );
};

export default WalletPageContainer;
