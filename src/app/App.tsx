import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ToDo from './components/Todo/Todo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div>
      <ToDo
        isDone={true}
        title={'Schuhe Putzen'}
        description={'Alle Schuhe im Regal vor der Tür'}
      ></ToDo>
      <ToDo
        isDone={false}
        title={'Schuhe trocknen'}
        description={'Alle Schuhe im Regal vor der Tür'}
      ></ToDo>
      <ToDo
        isDone={true}
        title={'Schuhe schnüren'}
        description={'Alle Schuhe im Regal vor der Tür'}
      ></ToDo>
    </div>
  );
}

export default App;
