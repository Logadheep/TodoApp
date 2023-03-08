import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoApp from './TodoApp';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<BrowserRouter>
	<Routes>
	<Route element={<TodoApp />} path="/" />
	<Route element={<Signin />} path="/signin"/>
	<Route element={<Signup />} path="/signup"/>
	</Routes>
	</BrowserRouter>
	</React.StrictMode>
);
