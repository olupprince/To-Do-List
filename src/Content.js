// import { useState } from "react/cjs/react.production.min"
import "./Style.css"
import { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event) => {

 setInputValue(event.target.value);

 };

 const handleAddTask = (event) => {
   event.preventDefault();

 if (inputValue.trim() !== '') {
 setTasks([...tasks, inputValue]);
 setInputValue('');
}
};

 const handleDeleteTask = (index) => {
 const updatedTasks = [...tasks];
 updatedTasks.splice(index, 1);
 setTasks(updatedTasks);
 }
    return(
        <div className="nav">
            <header className="App-header">
            <h2 id="title">To-Do List.</h2>
          </header>
          <form onSubmit={handleAddTask}>
            <input placeholder="Scheldule a task" type="text" value={inputValue} onChange={handleInputChange}/>
            <button type="submit">submit</button>
          </form>

          <ul>
          {tasks.map((task, index) => (
           <li key={index}>
            <div className="display">
              {task}
              <button className="btn" onClick={() => handleDeleteTask(index)}>Delete</button>
           </div>
            </li>
            ))}
          </ul>

          
        </div>
    )
}


export default Content