import React, { Component } from 'react';
import './AntDesign.css';
import moment from 'moment';
import {Switch, Route} from'react-router-dom'
import 'antd/dist/antd.css';
import {DatePicker, Popconfirm, message, Button, Icon, Input} from 'antd'
const { MonthPicker, RangePicker } = DatePicker;
const ButtonGroup = Button.Group
const Search = Input.Search;
const {TextArea} = Input
const text = 'Are you sure delete this task?';
function confirm() {
  message.info('Click on Yes.');
}
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
class AntDesign extends Component {

  
  render() {
    return (
      <div className="AntContainer">
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
          <Button type="primary" ghost>Primary</Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>Dashed</Button>
          <Button type="danger" ghost>danger</Button>
        </div>
        <div>
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </div>
        <div>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <br /><br />
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <br /><br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
        </div>
        <div>
          <TextArea placeholder="Autosize height based on content lines" autosize />
          <div style={{ margin: '24px 0' }} />
          <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
        </div>
        <div>
        <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
      <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 304 }}>
      <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>BR</Button>
      </Popconfirm>
    </div>
    </div>
    <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>
      </div>
    )
  }
}

export default AntDesign;
