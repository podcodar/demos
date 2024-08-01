import React from 'react';

function TaskButtonFilter() {
  return (
    <button type="button" className="btn toggle-btn">
      <span className="visually-hidden">Show </span>
      <button type="button">Add task</button>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default TaskButtonFilter;
