import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, editTask, completeTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title, isDone }) => {

  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask({ id }));
  };

  const handleEditClick = () => {
    const newName = prompt("Enter the new task name:", title);
    if (newName !== null) {
      dispatch(editTask({ id, name: newName }));
    }
  };

  const handleCompleteClick = () => {
    dispatch(completeTask({ id }));
  };

  const taskTitleClassName = `task-title${isDone ? " completed-task" : ""}`;
  const taskTitleStyle = { textDecoration: isDone ? "line-through" : "none" };

  return (
    <li className="task-item" >
        
      <div className={taskTitleClassName} style={taskTitleStyle}>
        {title}
      </div>
      <div>
        <button className="remove-task-button" onClick={removeTask}>Delete</button>
        <button className="edit-task-button"onClick={handleEditClick}>Edit</button>
        <button className="complete-task-button" onClick={handleCompleteClick}>
          {isDone ? 'isDone' : 'UnDone'}
        </button>

      </div>
    </li>
  );
};

export default TodoItem;
