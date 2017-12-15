
import ReactDataGrid from 'react-data-grid'
import React, {Component} from 'react'

export default class DataGrid extends Component { 
    constructor(props) {
      super(props)
      const originalRows = this.createRows()
      const rows = [...originalRows]
      this.state = {originalRows, rows}

    }
    _columns = [
      {
        key: 'id',
        name: 'ID',
        resizable: true,
        sortable: true,
        width: 40
      },
      {
        key: 'task',
        name: 'Title',
        sortable: true,        
        resizable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        sortable: true,
        resizable: true
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        sortable: true,
        resizable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        sortable: true,
        resizable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        sortable: true,
        resizable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        sortable: true,
        resizable: true
      }
    ];

    handleGridSort = (sortColumn, sortDirection) => {
      const comparer = (a, b) => {
        if (sortDirection === 'ASC') {
          return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
        } else if (sortDirection === 'DESC') {
          return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
        }
      };
  
      const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
  
      this.setState({ rows });
    }
    getRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    }
  
    createRows = () => {
      let rows = [];
      for (let i = 1; i < 20000; i++) {
        rows.push({
          id: i,
          task: 'Task ' + i,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
          startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
          completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        });
      }
  
      return rows;
    }
  
    rowGetter = (i) => {
      return this.state.rows[i];
    }
  
    render = () => {
      return  (
        <ReactDataGrid
          columns={this._columns}
          onGridSort={this.handleGridSort}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500} />);
    }
}