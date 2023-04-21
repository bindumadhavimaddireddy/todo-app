import React, { useState } from "react";
import './index.css';

const TodoEditItem = (props) => {
    const { item, onUpdate, onCancel } = props;
    const [value, setValue] = useState(item.value)
    return (
        <div className="todo-edit-task">
            <input value={value} onChange={(e) => setValue(e.target.value)} className="todo-edit-task-input"/>
            <div className="item-actions">
                 <button className="button edit-btn" onClick={() => onUpdate(value, item.id)}>Update</button>
                 <button className="button delete-btn" onClick={() => onCancel(false)}>Cancel</button>
             </div>
        </div>
    )
}
const TodoItem = (props) => {
    const { item, onUpdate, onDelete } = props;
    const { value, id } = item;
    const [isEdit, setIsEdit] = useState(false);
    const onUpdateItem = (value, id) => {
        onUpdate(value, id);
        setIsEdit(false);
    }
    return (
        <>
         {isEdit ? <TodoEditItem item={item} onUpdate={onUpdateItem} onCancel={setIsEdit}/> : (
             <div className="todo-item">
             <span>{value}</span>
             <div className="item-actions">
                 <button className="button edit-btn" onClick={() => setIsEdit(true)}>Edit</button>
                 <button className="button delete-btn" onClick={() => onDelete(id)}>Delete</button>
             </div>
         </div>
         )}
        </>
       
    )
}

export default TodoItem;