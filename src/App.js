import React from "react";
import './App.css';
import TodoListApp from "./components/TodoListApp";

function App() {
    return (
        <div className="App">
            <div className="App__header">
                <h1 className="App__title">React Hooks Todo List App</h1>
                <p className="App__subtitle">
                    A todo list app built with React
                    Hooks by a 16 year old front-end
                    web developer: {' '}
                    <a href="https://joshternyak.com" target="_blank">Josh
                        Ternyak</a>.</p>
            </div>
            <TodoListApp/>
            <footer>
                <p>
                    It's an open source project {' '}
                    <a target="_blank" href="https://github.com/joshternyak/react-hooks-todo-list">
                        on Github
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default App;
