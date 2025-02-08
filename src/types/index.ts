export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ITodo {
  id: number;
  userId: number;
}

export interface IUserTodoCount {
  id: number;
  name: string;
  email: string;
  todoCount: number;
}
