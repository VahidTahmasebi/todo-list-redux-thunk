import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../feature/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // initial mount
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
