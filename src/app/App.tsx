import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Table />
    </div>
  );
}

export default App;
