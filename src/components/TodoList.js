import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const tasks = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="task-list">
		{tasks.map((task) => (
		  <TodoItem key={task.id} id={task.id} title={task.name} isDone={task.isDone} />
		))}
	  </ul>
	);
};

export default TodoList;