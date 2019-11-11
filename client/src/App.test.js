import React from 'react';
import ReactDOM from 'react-dom';
import App, { sum } from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('it returns the sum of two numbers', () => {
	const result = sum(50, 50);
	const expected = 100;

	expect(result).toBe(expected);
});
