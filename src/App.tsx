import './App.scss';
import Screen from 'src/components/screen/Screen';
import Home from 'src/views/home/Home';
import PlayStage from 'src/views/stage/PlayStage';
import { Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="container">
      <Screen>
        <Switch>
          <Route path="/play-stage">
            <PlayStage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Screen>
      <div className="mask" />
    </div>
  );
}

export default App;
