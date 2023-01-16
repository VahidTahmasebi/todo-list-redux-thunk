import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem id={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
