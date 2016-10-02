import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

import { fetchGroups } from '../../actions/groupActions';

class Groups extends Component {

  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    fetchGroups(this.props.dispatch);
  }

  renderTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Группа</TableHeaderColumn>
            <TableHeaderColumn>Обновить</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.groups.map(group => {
            return (
              <TableRow>
                <TableRowColumn>{group.short}</TableRowColumn>
                <TableRowColumn>Button</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <Card>
        <CardHeader title="Список групп" />
        {this.props.groups.length && this.renderTable()}
        {!this.props.groups.length && <CircularProgress />}
      </Card>
    );
  }
}

export default connect(state => ({
  groups: state.groupReducer.groups
}))(Groups);

Groups.propTypes = {
  short: PropTypes.array
};
