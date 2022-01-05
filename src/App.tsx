import React from 'react';

import './App.css';
import Header from './header/Header';
import { Pages } from './Pages/Pages';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Pages />
  </div>
);

export default App;
