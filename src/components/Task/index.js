import React from "react";
import './style.css';

function Task({task, index, completeTask, unCompleteTask, removeTask}) {
    const isCompleted = task.completed;
    return (
        <div
            className="Task"
            style={{
                opacity: isCompleted ? "0.3" : "1",
                boxShadow: isCompleted ? '-1px 1px 0px 0px #000' : '-4px 4px' +
                    ' 0px 0px #000'
            }}
        >
            <h3 style={{textDecoration: isCompleted ? "line-through" : ""}}>{task.title}</h3>
            <div className="Task__controls">
                <button
                    className="Task__controls-btn"
                    onClick={() => isCompleted ? unCompleteTask(index) : completeTask(index)}
                >
                    {isCompleted ? 'Uncomplete' : 'Complete'}
                </button>
                <button
                    className="Task__controls-btn Task__controls-btn--close"
                    onClick={() => removeTask(index)}
                >
                    x
                </button>
            </div>
        </div>
    );
}

export default Task;
