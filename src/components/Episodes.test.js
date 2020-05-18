import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

//create an test episode
const fakeEpisode = {
	id: 1,
	image: {
		medium: 'https://example.com/medium.png'
	},
	season: 2,
	name: 'Hopper is alive!!!',
	number: 99,
	summary: 'On the third dimension, Hopper struggles to contact everybody...',
	runtime: '45'
};

const secondFakeEpisode = { ...fakeEpisode, id: 2 };

test('episodes render with no error', () => {
	//using jest expect and .not
	expect(() => {
		render(<Episodes episodes={[]} />);
	}).not.toThrow();
});

test('episodes render what is provided', () => {
	const { queryByText, queryByAltText } = render(<Episodes episodes={[ fakeEpisode ]} />);

	//image
	const image = queryByAltText(fakeEpisode.name);
	//expect image is there
	expect(image).not.toBeNull();
	//expect the source is the correct url like we provided.
	expect(image.src).toEqual(fakeEpisode.image.medium);

	//season
	const seasonInfo = queryByText(/Season 2, Episode 99/);
	//make sure season infon is exist (not TobeNull) and the text is right
	expect(seasonInfo).not.toBeNull();

	//name
	const name = queryByText(/Hopper is alive!!!/);
	expect(name).not.toBeNull();

	//summary
	const summary = queryByText(/On the third dimension, Hopper struggles to contact everybody.../);
	expect(summary).not.toBeNull();

	//runtime
	const runtime = queryByText(/45 minutes/);
	expect(runtime).not.toBeNull();
});

test('episodes render more than one episode', () => {
    
    const { container } = render(<Episodes episodes={[ fakeEpisode, secondFakeEpisode ]} />);
    const [component] = container.children;

    // expect(component.children.length).toEqual(2);
    expect(component.children).toHaveLength(2);
});
