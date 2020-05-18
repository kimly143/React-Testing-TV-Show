import axios from 'axios';

export const fetchShow = () => {
    // cant access setShow and setSeason in this file so we have to cut them out. but we want to get the promise from axios.
    // axios.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes').then((res) => {
	// 	setShow(res.data);
	// 	setSeasons(formatSeasons(res.data._embedded.episodes));
	// });
	return axios.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes');
};
