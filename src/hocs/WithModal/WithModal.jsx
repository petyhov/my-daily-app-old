import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const WithLoader = ({ children, handler, closeAfterClickOutside = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    };
    if (closeAfterClickOutside) {
      document.addEventListener('click', checkIfClickedOutside);
      return () => {
        document.removeEventListener('click', checkIfClickedOutside);
      };
    }
  }, [handler]);

  return (
    <div className={styles.container} ref={ref}>
      {children}
    </div>
  );
};

WithLoader.propTypes = {
  children: PropTypes.node,
  handler: PropTypes.func,
  closeAfterClickOutside: PropTypes.bool,
};

export default WithLoader;
