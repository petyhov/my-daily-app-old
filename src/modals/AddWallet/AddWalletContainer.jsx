import { useState } from 'react';

import PropTypes from 'prop-types';

import AddWallet from './AddWallet';

const defaultOptions = [
  { value: 'food', label: 'Їжа' },
  { value: 'auto', label: 'Авто' },
  { value: 'party', label: 'Паті 🤪' },
  { value: 'clothes', label: 'Одежа' },
  { value: 'other', label: 'Інше' },
];

const AddWalletContainer = ({ handler }) => {
  const [items, setItems] = useState([
    {
      value: '0000',
      category: '',
      comment: '',
    },
  ]);
  console.log(setItems);
  return (
    <AddWallet
      handler={handler}
      items={items}
      defaultOptions={defaultOptions}
    />
  );
};

AddWalletContainer.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default AddWalletContainer;
