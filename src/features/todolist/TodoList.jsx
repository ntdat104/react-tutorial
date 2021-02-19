import React, { useState } from "react";
import "./TodoList.scss";

function TodoList() {
    const [todoes, setTodoes] = useState(["Read books", "Listen to music", "Play the piano"])
	const [todo, setTodo] = useState("");

    function onHandleSubmit(e) {
        e.preventDefault();
        setTodoes([...todoes, todo]);
        setTodo("");
    }

	return (
		<div className="todo-list">
			<div className="todo-list__container">
				<h1 className="todo-list__title">Todolist</h1>
				<form className="todo-list__form" onSubmit={(e) => onHandleSubmit(e)}>
					<input
						type="text"
						className="todo-list__input"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button className="todo-list__btn">ADD</button>
				</form>
				<ul className="todo-list__ul">
                    {todoes.map((item, index) => <li key={index}>- {item}</li>)}
                </ul>
			</div>
		</div>
	);
}

export default TodoList;
