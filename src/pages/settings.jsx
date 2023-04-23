// import { useState } from 'react';

import styles from '@/styles/settingsPage.module.scss';

const SettingsPage = () => {
  // const [operationType, setOperationType] = useState();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Налаштування</h2>
      <div className={styles.wraper}>
        <div className={styles.labelWrap}>
          <label className={styles.label}>
            <input type="checbox" />
            <p>Додавання</p>
          </label>
          <label className={styles.label}>
            <input type="checbox" />
            <p>Віднімання</p>
          </label>
        </div>
        <div className={styles.error}>
          <p>Має бути вибрано хоча б один</p>
        </div>
      </div>
      <div className={styles.wraper}>
        <div className={styles.labelWrap}>
          <label className={styles.label}>
            <input type="radio" />
            <p>Без переходу через десяток</p>
          </label>
          <label className={styles.label}>
            <input type="radio" />
            <p>З переходом через десяток</p>
          </label>
        </div>
        <div className={styles.error}>
          <p>Має бути вибрано хоча б один</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
