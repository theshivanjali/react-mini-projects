import React, { useState } from "react";
import './App.css'

let globalId = 0;

function App() {
  const [todos, setTodos] = useState([]);

  const [task, setTask] = useState("");

  function addTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {

		if(task !== ""){
			setTask("");
			return [...oldTodos, { todo: task, id: globalId++ }];
		}else {
			return [...oldTodos];
		}

    });
  }

  function deleteItem(itemID) {
	setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID));
  }

  return (
    <div className="container">
      <header className="card">
	  	<h1>To Do List</h1>
	  </header>
	  <main>
		  <div className="card add">
			<form onSubmit={addTodo} className="add-form">
	<div className="txt-container">
	<input
		className="txt-input"
		type="text"
		value={task}
		placeholder="What's on your mind today...?"
		onChange={(event) => setTask(event.target.value)}
	/>
	</div>
	<div className="btn-container">
		<button type="submit" id="add-btn">+</button>
				</div>
			</form>
		  </div>
      <ul className="todos">
        {todos.map((item) => {
          return (
            <div className="card" key={item.id}>
			<li className="todo-item">
				<p>{item.todo}</p>
			</li>
			<button className="delete-btn" onClick={()=> deleteItem(item.id)}>X</button>
            </div>
          );
        })}
      </ul>
		</main>
    </div>
  );
}

export default App;
