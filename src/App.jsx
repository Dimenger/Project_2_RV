import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function currentYear() {
	return new Date().getFullYear();
} // Функция на js - императивный стиль

//  всё что ниже декларативный стиль React, кроме элемента setInterval в useEffect, который устанавливает промежуток времени,
//  это императивный стиль

export function App() {
	const [count, setCount] = useState(0); // Счётчик кликов
	const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Текущее время
	const [currentYearValue, setCurrentYearValue] = useState(currentYear()); // State для текущего года

	// Хук для обновления текущего времени каждую секунду
	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date().toLocaleString());
		}, 1000);

		return () => clearInterval(timerId); // Очистка интервала при удалении компонента
	}, []);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count + 1)}>count is {count}</button>
				<p>{currentTime}</p> {/* Показываем текущее время */}
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<div className="cardYear">
				<p>Год: {currentYearValue}</p> {/* Добавляем отображение текущего года */}
			</div>
		</>
	);
}
