import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./feature/store";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItem from "./components/TotalCompleteItems";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='App container'>
          <AddTodoForm />
          <TotalCompleteItem />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
