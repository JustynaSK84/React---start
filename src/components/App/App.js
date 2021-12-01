import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <List />
      </main>
    )
  }
}

export default App;
