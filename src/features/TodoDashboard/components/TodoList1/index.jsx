import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList1.propTypes = {
    todoList: PropTypes.array,
};

TodoList1.defaultProps = {
    todoList: [],
}

function TodoList1({todoList}) {
    return (
        <ul>
            {todoList.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default TodoList1;