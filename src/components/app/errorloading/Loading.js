import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingSelector } from './reducers';
import { BounceLoader } from 'react-spinners';


class Loading extends Component {
  
  render() {
    const { loading } = this.props;
    if(!loading) return null;
    
    return (
      <div className="loading">
        <BounceLoader 
          size={60}
          color={'#36D7B7'}
          loading={loading}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ loading: loadingSelector(state) }),
  null
)(Loading);
