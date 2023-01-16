const TodoItem = () => {
  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input type='checkbox' className='mr-3' />
        </span>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
