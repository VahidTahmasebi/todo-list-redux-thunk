import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../feature/todosSlice";

const AddTodoForm = () => {
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();

  // form handler
  const onSubmit = (e) => {
    e.preventDefault();
    // update dispatch title
    dispatch(addAsyncTodos({ title: valueInput }));
    setValueInput("");
  };

  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button type='submit' className='btn btn-primary mb-2'>
        Add todo
      </button>
    </form>
  );
};

export default AddTodoForm;
