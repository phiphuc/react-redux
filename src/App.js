import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div> 
          <h3>Hello world</h3>
          {this.props.dulieu}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.numb
  }
}

export default connect(mapStateToProps)(App) ;
