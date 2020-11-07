import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Route path="/" component={HomePage} exact/>
    </>
  );
}

export default App;
