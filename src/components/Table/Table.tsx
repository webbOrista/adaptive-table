import useUsersTodoCount from "../../hooks/useUsersTodoCount";
import avatar from "../../assets/user-avatar.svg";
import { MoonLoader } from 'react-spinners';

const Table = () => {
  const { data, error, loading } = useUsersTodoCount();

  if (loading) return <MoonLoader color="#36d7b7" size={50} />;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>to-do count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <div>
                  <img src={avatar} alt="иконка пользователя" />
                  <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>{user.todoCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
