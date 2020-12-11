import React from 'react';
import TodoList from '../components/TodoList';
import TodoList1 from '../components/TodoList1';

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

  const localTask = JSON.parse(localStorage.getItem('tasks'));
  console.log(localTask);
  const tasks = localTask || [
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

  function addTask(boardID, item = {}) {
    let task_index = tasks.findIndex(task => task.id === boardID);
    let currentTasks = tasks[task_index];
    currentTasks.items.push(item);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  return (
    <div>
      <TodoList tasks={tasks} addTask={addTask} />
      {/* <TodoList1 todoList={tasks1}/> */}
    </div>
  );
}

export default TodoListPage;