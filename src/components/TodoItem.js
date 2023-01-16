import { useDispatch } from "react-redux";
import { deleteAsyncTodo, toggleCompleteAsync } from "../feature/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <input
            type='checkbox'
            className='mr-3'
            checked={completed}
            onChange={() =>
              dispatch(
                toggleCompleteAsync({ id, title, completed: !completed }),
              )
            }
          />
          <span>{title}</span>
        </div>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(deleteAsyncTodo({ id }))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
