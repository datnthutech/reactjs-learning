import React, { useState } from 'react';
import {
    Row, Col, Badge, Button
} from 'reactstrap';
import TodoItem from '../TodoItem';
import TodoAdd from '../TodoAdd';

const TodoList = (props) => {
    const { tasks, addTask } = props;

    const [add, setAdd] = useState(false);
    const [currentBoard, setCurrentBoard] = useState({});


    const showAddPop = (board) => {
        setAdd(!add);
        setCurrentBoard(board);
    }

    function showStatus(status) {
        let color = '';
        let colors = {
            'active': 'danger',
            'inprogress': 'primary',
            'pending': 'warning',
            'done': 'success'
        }
        return (
            <Badge style={{ 'float': 'right' }} color={colors[status] || 'light'}>{status}</Badge>
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
                            <Button onClick={() => showAddPop(task)}>Add</Button>
                            {
                                task.items.map((item) => (
                                    <TodoItem item={item} showStatus={showStatus} />
                                ))
                            }
                        </Col>
                    ))
                }
                <TodoAdd modal={add} toggle={showAddPop} board={currentBoard} addTask={addTask} />
            </Row>
        </>
        // div end
    )
}

export default TodoList;

// Page Router // chuyen page
// Container // du lieu
// Component render // ui