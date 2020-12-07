import React from 'react';
import PropTypes from 'prop-types';

import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  import TodoDetail from '../TodoDetail'
  
  const TodoItem = (props) => {
    const { item, showStatus } = props
    return (
      <Card key={`taskdasdsa-${item.id}`} style={{'padding': '10px', 'margin': '10px'}}>
        <CardImg top width="100%" src={item.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{item.name} {showStatus(item.status)}</CardTitle>
          <TodoDetail/>
        </CardBody>
      </Card>
    )
  }
  
  TodoItem.propsTypes = {
      item: PropTypes.object.required,
      showStatus: PropTypes.func.required
  }
  

export default TodoItem;