import React from 'react';
import TodoList from '../components/TodoList';

const TodoListPage = (props) => {
    const tasks1 = [
        {
          id: 1,
          name: 'Task 1',
          status: 'active', // do
          image: 'https://picsum.photos/300/300'
        },
        {
          id: 2,
          name: 'Task 2',
          status: 'inprogress', // xanh duong
          image: 'https://picsum.photos/300/300'
        },
        {
          id: 3,
          name: 'Task 3',
          status: 'pending', // vang
          image: 'https://picsum.photos/300/300'
        },
        {
          id: 4,
          name: 'Task 4',
          status: 'done', // xanh la
          image: 'https://picsum.photos/300/300'
        }
      ];
      const tasks2 = [
        {
          id: 1,
          name: 'Task 1',
          status: 'active', // do
          image: 'https://picsum.photos/300/300'
        },
        {
          id: 2,
          name: 'Task 2',
          status: 'inprogress', // xanh duong
          image: 'https://picsum.photos/300/300'
        }
      ];
      const tasks3 = [
        {
          id: 1,
          name: 'Task 1',
          status: 'done', // do
          image: 'https://picsum.photos/300/300'
        },
        {
          id: 2,
          name: 'Task 2',
          status: 'done', // xanh duong
          image: 'https://picsum.photos/300/300'
        }
      ];
    
      const tasks = [
        {
          id: 1,
          header: 'Todo',
          items: tasks1
        },
        {
          id: 2,
          header: 'Coding',
          items: tasks2
        },
        {
          id: 3,
          header: 'Done',
          items: tasks3
        }
      ];
    return (
        <div>
            <TodoList tasks={tasks} />
        </div>
    );
}

export default TodoListPage;