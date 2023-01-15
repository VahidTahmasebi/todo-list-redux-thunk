const AddTodoForm = () => {
  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        className='form-control mb2 mr-sm-2'
        placeholder='Add todo...'
      />
      <button type='submit' className='btn btn-primary mb-2'>
        Add todo
      </button>
    </form>
  );
};

export default AddTodoForm;
