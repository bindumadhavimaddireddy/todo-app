import React, { useRef } from "react";
import './index.css';


const TodoInput = (props) => {
    const { addItem } = props;
    const inputRef = useRef();
    return (
        <div className="todo-input-container">
            <input type="text" className="todo-input" placeholder="Add Task" ref={inputRef} />
            <button className="todo-input-btn" onClick={() => addItem(inputRef.current.value)}>Add</button>
        </div>
    )
}

export default TodoInput