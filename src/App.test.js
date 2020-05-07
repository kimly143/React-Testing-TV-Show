import React from 'react';
import { render } from '@testing-library/react';

import App from './App.js';

//test if app render corectly
test('app render with no error', () => {
	//using jest expect and .not
	expect(() => {
		render(<App />);
	}).not.toThrow();
});