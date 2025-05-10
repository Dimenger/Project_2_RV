import React, { useState, useEffect, createElement } from 'react';
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

	function renderLink(href, imgSrc, altText) {
		return createElement('a', { href, target: '_blank' }, [
			createElement('img', { src: imgSrc, className: 'logo', alt: altText }),
		]);
	}

	return createElement(
		React.Fragment,
		null,
		createElement('div', null, [
			renderLink('https://vite.dev', viteLogo, 'Vite logo'),
			renderLink('https://react.dev', reactLogo, 'React logo'),
		]),
		createElement('h1', null, 'Vite + React'),
		createElement('div', { className: 'card' }, [
			createElement(
				'button',
				{ onClick: () => setCount(count + 1) },
				`count is ${count}`,
			),
			createElement('p', null, currentTime),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to test HMR',
			),
		]),
		createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more',
		),
		createElement(
			'div',
			{ className: 'cardYear' },
			createElement('p', null, `Год: ${currentYearValue}`),
		),
	);
}
