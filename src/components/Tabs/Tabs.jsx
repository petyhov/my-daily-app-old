import styles from './styles.module.scss';

const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
  const tabsHandler = (index) => () => {
    setCurrentTab(index);
  };

  return (
    <ul className={styles.list}>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          className={index === currentTab ? styles.active : ''}
          onClick={tabsHandler(index)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
