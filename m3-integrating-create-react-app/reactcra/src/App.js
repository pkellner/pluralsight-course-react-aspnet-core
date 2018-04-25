import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FullPage from './ClientApp/Components/common/FullPage';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Router>
        <FullPage />
      </Router>
       
      </div>
    );
  }
}

export default App;
