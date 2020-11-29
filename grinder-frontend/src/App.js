import { Route } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import StartStudyingPage from './pages/StartStudyingPage';
import PlannerPage from './pages/PlannerPage';

function App() {
  return (
    <>
      <Helmet>
        <title>GRINDER</title>
      </Helmet>
      <Route path="/" component={HomePage} exact/>
      <Route path="/signin" component={SignInPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/study" component={StartStudyingPage}/>
      <Route path={["/planner/@:date","/planner"]} component={PlannerPage}/>
    </>
  );
}

export default App;
