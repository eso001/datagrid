import React, { Component } from 'react';
import './ExtraDetails.css';
import * as FontAwesome from 'react-icons/lib/fa'

class ExtraDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }
  render() {
    if(!this.state.show) {
      return (
        <div>
          
        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default App;
