import {useState} from "react";

function ToDoList(){
    const [Tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = Tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0 ) {
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < Tasks.length -1 ) {
            const updatedTasks = [...Tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={'to-do-list'}>
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder={'Enter a Task...'}
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className={'add-btn'} onClick={addTask}>Add</button>
                <ol>
                    {Tasks.map((Task, index) => (
                        <li key={index}>
                            <span className={'text'}> {Task} </span>
                            <button className={'delete-btn'} onClick={() => deleteTask(index)}>Delete</button>
                            <button className={'move-btn'} onClick={() => moveTaskUp(index)}>👆🏻</button>
                            <button className={'move-btn'} onClick={() => moveTaskDown(index)}>👇🏻</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;