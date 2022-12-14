import React, {Component} from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import WelcomeMessage from '../Settings/Welcomemessage';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
