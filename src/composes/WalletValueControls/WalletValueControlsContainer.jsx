import PropTypes from 'prop-types';

import { increaseWithinTen, decreaseWithinTen } from '@/utils';

import WalletValueControls from './WalletValueControls';

const WalletValueControlsContainer = ({ value, setValue }) => {
  const increaseHandler = (event) => {
    const index = event.currentTarget.getAttribute('data-index-number');
    const oldItem = [...value];
    oldItem[index] = increaseWithinTen(oldItem[index]);
    setValue(oldItem);
  };

  const decreaseHandler = (event) => {
    const index = event.currentTarget.getAttribute('data-index-number');
    const oldItem = [...value];
    oldItem[index] = decreaseWithinTen(oldItem[index]);
    setValue(oldItem);
  };

  return (
    <WalletValueControls
      value={value}
      increaseHandler={increaseHandler}
      decreaseHandler={decreaseHandler}
    />
  );
};

WalletValueControlsContainer.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default WalletValueControlsContainer;
