import './App.scss';
import Screen from 'src/components/screen/Screen';
import Home from 'src/views/home/Home';

function App(): JSX.Element {
  return (
    <div className="container">
      <Screen>
        <Home />
      </Screen>
    </div>
  );
}

export default App;
