import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)