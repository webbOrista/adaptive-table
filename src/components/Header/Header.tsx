import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>User To-Do Table</h1>
      <h2 className={styles.subtitle}>User task table for effective planning.</h2>
    </div>
  );
};

export default Header;
