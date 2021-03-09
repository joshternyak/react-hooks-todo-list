import React, {useState, useEffect} from 'react';
import './style.css';
import Task from "../Task";
import CreateTaskForm from "../CreateTaskForm";
import NoTasksMessage from "../NoTasksMessage";

function TodoListApp() {
    const [tasks, setTasks] = useState([
        {
            title: 'Read a book',
            completed: false
        },
        {
            title: 'Learn React hooks',
            completed: false
        },
        {
            title: 'Do 20 pushups',
            completed: true
        },
    ]);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    const addTask = (title) => {
        const newTasks = [...tasks, {title, completed: false}];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const unCompleteTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = false;
        setTasks(newTasks);
    }

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    }, [setTasksRemaining, tasks]);

    return (
        <div className="TodoListApp">
            <CreateTaskForm addTask={addTask}/>
            <h2>{tasksRemaining} tasks to complete</h2>
            <div className="TodoListApp__tasks">
                {tasks.length > 0 ? tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        unCompleteTask={unCompleteTask}
                        removeTask={removeTask}
                    />
                )) : <NoTasksMessage/>}
            </div>

        </div>
    );
}

export default TodoListApp;
