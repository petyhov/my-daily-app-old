import { useState } from 'react';

import PropTypes from 'prop-types';

import AddWalletModal from './AddWalletModal';

const defaultOptions = [
  { value: 'food', label: 'Їжа 🍳' },
  { value: 'auto', label: 'Авто 🚗' },
  { value: 'party', label: 'Паті 🤪' },
  { value: 'clothes', label: 'Одежа 👕' },
  { value: 'games', label: 'Ігри 🎮' },
  { value: 'other', label: 'Інше' },
];

const AddWalletModalContainer = ({ modalHandler }) => {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState([0, 0, 0, 0]);
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const saveHandler = () => {
    console.log('SAVE');
  };

  return (
    <AddWalletModal
      modalHandler={modalHandler}
      date={date}
      setDate={setDate}
      value={value}
      setValue={setValue}
      category={category}
      setCategory={setCategory}
      comment={comment}
      commentHandler={commentHandler}
      saveHandler={saveHandler}
      defaultOptions={defaultOptions}
    />
  );
};

AddWalletModalContainer.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default AddWalletModalContainer;
