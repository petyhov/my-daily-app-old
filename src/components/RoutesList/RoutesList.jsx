import PropTypes from 'prop-types';
import Link from 'next/link';

import { routesData } from '@/configs';

const RoutesList = ({ items, listStyles, itemStyles, btnStyles }) => {
  return (
    <ul className={listStyles}>
      {items.map((item) => (
        <li key={item} className={itemStyles}>
          <Link className={btnStyles} href="/game">
            <i className={routesData[item].image}></i>
            <h3>{routesData[item].name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

RoutesList.propTypes = {
  items: PropTypes.array.isRequired,
  listStyles: PropTypes.string.isRequired,
  itemStyles: PropTypes.string.isRequired,
  btnStyles: PropTypes.string.isRequired,
};

export default RoutesList;
