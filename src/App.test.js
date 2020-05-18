import React from 'react';
import { render, act } from '@testing-library/react';

import App from './App.js';

const fakeShow = {
	id: 1,
	_embedded: {
		episodes: []
	},
	image: {
		original: 'https://example.com/original.png'
	},
	name: 'Stranger things awaken',
	summary: 'Did it really gone? Is the upside down monsters dead?'
};
jest.mock('./api/fetchShow');

// jest.mock('./api/fetchShow', () => {
// const fakeShow = {
// 	id: 1,
// 	_embedded: {
// 		episodes: []
// 	},
// 	image: {
// 		original: 'https://example.com/original.png'
// 	},
// 	name: 'Stranger things awaken',
// 	summary: 'Did it really gone? Is the upside down monsters dead?'
// };
// 	return {
// 		fetchShow: jest.fn().mockResolvedValue({ data: fakeShow })
// 	};
// });

test('app render what is provided', () => {
	// let queryByText;
	// let queryByAltText;
	// act(()=>{
	//     let { queryByText, queryByAltText }= render(<App />);

	// });

	let { queryByText, queryByAltText } = render(<App />);

	//image
	const image = queryByAltText(fakeShow.name);
	//expect image is there
	expect(image).not.toBeNull();

	//expect the source is the correct url like we provided.
	expect(image.src).toEqual(fakeShow.image.original);

	//name
	const name = queryByText(/Stranger things awaken/);
	expect(name).not.toBeNull();

	//summary
	const summary = queryByText(/Did it really gone? Is the upside/);
	expect(summary).not.toBeNull();
});
