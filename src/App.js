import { Provider } from 'react-redux';
import { store } from './store'

import styles from './App.module.css';
import { Battlefield } from './Battlefield';
import { GameStats } from './GameStats';

function App() {
  return (
    <Provider store={store} >
      <div className={styles.app}>
        <Battlefield className={styles.field} />
        <GameStats className={styles.stats} />
      </div>
    </Provider>
  );
}

export default App;
