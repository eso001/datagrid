import React, {Component} from 'react'
import DataGrid from './DataGrid'
import Dropdown from 'react-dropdown'

export default class DataGridContainer extends Component { 
    constructor(props) {
      super(props)
      const originalRows = this.createRows()
      const rows = [...originalRows]
      this.state = {searchString:'', originalRows, rows, columns: this._columns}
    }
    _columns = [
      {
        key: 'id',
        name: 'ID',
        resizable: true,
        draggable:true,
        sortable: true,
        width: 40
      },
      {
        key: 'task',
        name: 'Title',
        sortable: true,     
        draggable:true,
        resizable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        sortable: true,
        draggable:true,
        resizable: true
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        sortable: true,
        draggable:true,
        resizable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        sortable: true,
        draggable:true,
        resizable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        draggable:true,
        sortable: true,
        resizable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        sortable: true,
        draggable:true,
        resizable: true
      }
    ];
    getRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    }
  
    createRows = () => {
      let rows = [];
      for (let i = 1; i < 8000; i++) {
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
    handleSearchChange = (e)=>{
      e.target.value ? this.setState({searchString: e.target.value}) : this.setState({searchString: ''})
    }
    handleDropdown=()=>{

    }
    rowGetter = (i) => {
      return this.state.rows[i];
    }
  
    render = () => {
      return  (
        <div>
          <input onChange={()=>{}}
        <input onChange={(e) => {this.handleSearchChange(e)}} />
          <DataGrid
            columns={this.state.columns}
            rows={this.state.rows}
             />;
        </div>
      )
    }
}