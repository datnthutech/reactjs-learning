import React from 'react';
import {
    Row, Col, Badge
} from 'reactstrap';
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    const { tasks } = props;

    function showStatus(status) {
        let color = '';
        switch (status) {
            case 'active':
                color = 'danger';
                break;
            case 'inprogress':
                color = 'primary';
                break;
            case 'pending':
                color = 'warning';
                break;
            case 'done':
                color = 'success';
                break;
            default:
                color = 'light';
        }
        return (
            <Badge style={{ 'float': 'right' }} color={color}>{status}</Badge>
        )
    }

    return (
        // div start
        <>
            <h1>List Task</h1>
            <Row>
                {
                    tasks.map((task) => (
                        <Col key={task.id} style={{ 'margin': '10px', 'background': '#cccccc82' }}>
                            <h3 style={{ 'textAlign': 'center' }}>{task.header}</h3>
                            {
                                task.items.map((item) => (
                                    <TodoItem item={item} showStatus={showStatus} />
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>
        </>
        // div end
    )
}

export default TodoList;

// Page Router // chuyen page
// Container // du lieu
// Component render // ui