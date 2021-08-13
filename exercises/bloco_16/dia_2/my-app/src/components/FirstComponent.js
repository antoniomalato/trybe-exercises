import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.myFirstState.map((element, index) => (
          <p key={index}>{ element }</p>
        ))}
      </div>
    )
  }
}

const mapStateToPros = state => ({
  myFirstState: state.myReducer.state
});

export default connect(mapStateToPros, null)(FirstComponent);
