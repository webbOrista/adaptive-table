import { useState, useEffect } from "react";
import { getUsers, getTodos } from "../api";
import { IUser, ITodo, IUserTodoCount } from "../types";

const useUsersTodoCount = () => {
  const [data, setData] = useState<IUserTodoCount[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const users: IUser[] = await getUsers();
        const todos: ITodo[] = await getTodos();
        const userEndTodos: IUserTodoCount[] = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          todoCount: todos.filter((todo) => user.id === todo.userId).length,
        }));

        setData(userEndTodos);
      } catch (error) {
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, loading };
};

export default useUsersTodoCount;
