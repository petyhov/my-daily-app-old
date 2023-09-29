import PropTypes from 'prop-types';

import { WithModal } from '@/hocs';

const AddUserTask = ({ modalHandler }) => {
  return (
    <WithModal modalHandler={modalHandler} closeAfterClickOutside={false}>
      <h2>Modal</h2>
    </WithModal>
  );
};

export default AddUserTask;
