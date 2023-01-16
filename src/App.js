import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='App Container'></div>
      </div>
    </Provider>
  );
}

export default App;
