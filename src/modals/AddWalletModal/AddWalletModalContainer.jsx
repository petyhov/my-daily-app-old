import { useState } from 'react';

import PropTypes from 'prop-types';

import AddWalletModal from './AddWalletModal';

const defaultOptions = [
  { value: 'food', label: 'Їжа' },
  { value: 'auto', label: 'Авто' },
  { value: 'party', label: 'Паті 🤪' },
  { value: 'clothes', label: 'Одежа' },
  { value: 'other', label: 'Інше' },
];

const AddWalletModalContainer = ({ handler }) => {
  const [value, setValue] = useState([0, 0, 0, 0]);
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  return (
    <AddWalletModal
      handler={handler}
      value={value}
      setValue={setValue}
      category={category}
      setCategory={setCategory}
      comment={comment}
      setComment={setComment}
      defaultOptions={defaultOptions}
    />
  );
};

AddWalletModalContainer.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default AddWalletModalContainer;
