import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const WithLoader = ({
  children,
  modalHandler,
  closeAfterClickOutside = true,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        modalHandler(e);
      }
    };
    if (closeAfterClickOutside) {
      document.addEventListener('click', checkIfClickedOutside);
      return () => {
        document.removeEventListener('click', checkIfClickedOutside);
      };
    }
  }, [closeAfterClickOutside, modalHandler]);

  return (
    <div className={styles.container} ref={ref}>
      {children}
    </div>
  );
};

WithLoader.propTypes = {
  children: PropTypes.node,
  modalHandler: PropTypes.func,
  closeAfterClickOutside: PropTypes.bool,
};

export default WithLoader;
