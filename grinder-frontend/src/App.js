import { Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import StartStudyingPage from './pages/StartStudyingPage';
import PlannerPage from './pages/PlannerPage';

function App() {
  return (
    <>
      <MetaTags>
          <title>GRINDER</title>
          <meta property="og:title" content="GRINDER" />
          <meta name="description" content="Planner for grinders"/>
          <meta property="og:image" content={`../publish/og_image.png`} />
        </MetaTags>
      <Route path="/" component={HomePage} exact/>
      <Route path="/signin" component={SignInPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/study" component={StartStudyingPage}/>
      <Route path={["/planner/@:date","/planner"]} component={PlannerPage}/>
    </>
  );
}

export default App;
