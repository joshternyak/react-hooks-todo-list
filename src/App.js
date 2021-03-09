import React from "react";
import './App.css';
import TodoListApp from "./components/TodoListApp";

function App() {
    return (
        <div className="App">
            <div className="App__header">
                <h1 className="App__title">React Hooks Todo List App</h1>
                <p className="App__subtitle">A todo list app built with React
                    Hooks by a 16 year old front-end
                    web developer.</p>
            </div>
            <TodoListApp/>
        </div>
    );
}

export default App;
