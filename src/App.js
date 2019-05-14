import React, { Component } from 'react';
import { connect } from 'react-redux';
import NodeList from './components/NodeList';
import NodeForm from './components/nodeForm';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NodeList />
            <NodeForm />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
