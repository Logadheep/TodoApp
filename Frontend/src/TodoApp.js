import { Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TodoApp.css';
import axios from 'axios';

function TodoApp() {
	const [titleValue, setTitleValue] = useState('');
	const [textValue, setTextValue] = useState('');
	const [todos, setTodos] = useState([]);

	const getTodos = () => {
		axios.get('https://localhost:8080/todos')
		.then(res => {console.log(res.data)})
		.catch(err => {console.log(err)});
	}
	const handleTextChange = (e) => {
		setTextValue(e.target.value);
	};

	const handleTitleChange = (e) => {
		setTitleValue(e.target.value);
	};

	var idno=1;
	const handleAddTodo = () => {
		if (textValue !== ''&& titleValue) {
			const newTodo = {
				id: idno,
				title: titleValue,
				description: textValue,
				completed: false,
			};
			idno++;
			// axios.post('http://localhost:8080/todos', newTodo)
			setTodos([...todos, newTodo]);
			setTextValue('');	
			setTitleValue('');
		}
	};

	const handleDeleteTodo = (id) => {
		axios.delete('http://localhost:8080/todos/'+id)
		.then(res => {console.log(res.data)})
		.catch(err => {console.log(err)});
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};
	const handleToggleCompleted = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	// setTodos(axios.get('https://localhost:8080/todos'))
	// .then(res => {console.log(res.data)})
	// .catch(err => {console.log(err)});
	
	return (
		<div className="container">
			<p className="heading">Todo App</p>
			<button onClick={handleAddTodo} style={{float:'right'}}>Add Todo</button>
			<input type="text" placeholder='Title' value={titleValue} onChange={handleTitleChange} />
			<input type="text" placeholder='Description' value={textValue} onChange={handleTextChange} />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input type="checkbox" onChange={() => handleToggleCompleted(todo.id)}/>
						<p
							style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
							onClick={() => handleToggleCompleted(todo.id)}
						>
							{todo.title}
						</p><p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.description}</p>
						<button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoApp;
