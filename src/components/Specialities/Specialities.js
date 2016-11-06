import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionUpdate from 'material-ui/svg-icons/action/update';

import { fetchSpecialities } from '../../actions/specialityActions';

class Specialities extends Component {

  componentWillMount() {
    this.props.dispatch(fetchSpecialities());
  }

  renderTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Специальность</TableHeaderColumn>
            <TableHeaderColumn>Количество групп</TableHeaderColumn>
            <TableHeaderColumn>Обновить список групп</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.specialities.map(speciality => {
            return (
              <TableRow key={speciality._id}>
                <TableRowColumn>{speciality.short}</TableRowColumn>
                <TableRowColumn>{speciality.groupsCount}</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    icon={<ActionUpdate />}
                  />
                </TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  render () {
    const { specialities } = this.props;
    return (
      <div>
        {specialities.length && this.renderTable(specialities)}
        {!specialities.length && <CircularProgress />}
      </div>
    );
  }
}

export default connect(
  state => ({
    specialities: state.specialityReducer.specialities
  })
)(Specialities);
