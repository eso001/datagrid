
import ReactDataGrid from 'react-data-grid'
import React, {Component} from 'react'
import { DraggableHeader } from 'react-data-grid-addons'
const {DraggableContainer} = DraggableHeader
export default class DataGrid extends Component { 
    constructor(props) {
      super(props)
      const originalRows = [...props.rows]
      const rows = [...originalRows]
      this.state = {originalRows, rows, columns: [...props.columns]}
    }
    onHeaderDrop = (source, target) => {
      const stateCopy = Object.assign({}, this.state);
      console.log('source and target on header drop', source, target)
      const columnSourceIndex = this.state.columns.findIndex(
        i => i.key === source
      );
      const columnTargetIndex = this.state.columns.findIndex(
        i => i.key === target
      );
  
      stateCopy.columns.splice(
        columnTargetIndex,
        0,
        stateCopy.columns.splice(columnSourceIndex, 1)[0]
      );
  
      const emptyColumns = Object.assign({},this.state, { columns: [] });
      this.setState(
        emptyColumns
      );
  
      const reorderedColumns = Object.assign({},this.state, { columns: stateCopy.columns });
      this.setState(
        reorderedColumns
      );
    };
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
  
    componentDidReceiveProps(nextProps){
      console.log('nextprops', nextProps)
    }
    rowGetter = (i) => {
      return this.state.rows[i];
    }
  
    render = () => {
      return  (
        <DraggableContainer 
        onHeaderDrop={this.onHeaderDrop}>
          <ReactDataGrid
            columns={this.state.columns}
            onGridSort={this.handleGridSort}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={500} />;
        </DraggableContainer>
      )
    }
}