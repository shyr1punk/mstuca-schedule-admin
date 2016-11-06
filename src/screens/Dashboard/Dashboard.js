import React, { Component, PropTypes } from 'react';

import Groups from '../../components/Groups/Groups';
import Specialities from '../../components/Specialities/Specialities';

class Dashboard extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <Groups />
          </div>
          <div className='col-md-6'>
            <Specialities />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
