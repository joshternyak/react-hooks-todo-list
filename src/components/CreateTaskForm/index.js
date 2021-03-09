import React, {useState} from "react";
import './style.css';

function CreateTaskForm({addTask}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Add a new task"
                className="CreateTaskForm"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default CreateTaskForm;
