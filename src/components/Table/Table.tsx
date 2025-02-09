import useUsersTodoCount from "../../hooks/useUsersTodoCount";
import avatar from "../../assets/user-avatar.svg";
import { MoonLoader } from 'react-spinners';
import styles from './Table.module.css';

const Table = () => {
  const { data, error, loading } = useUsersTodoCount();

  if (loading) return <div className={styles.center}><MoonLoader color="#36d7b7" size={80} /></div>;
  if (error) return <div className={styles.center}><p className={styles.error}>Ошибка: {error}</p></div>;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.indexHead}>#</th>
            <th>username</th>
            <th>to-do count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td className={styles.index}>{index + 1}</td>
              <td>
                <div className={styles.userWrapper}>
                  <img src={avatar} alt="иконка пользователя" />
                  <div>
                    <p>{user.name}</p>
                    <p className={styles.userEmail}>{user.email}</p>
                  </div>
                </div>
              </td>
              <td className={styles.todoCount}>{user.todoCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
