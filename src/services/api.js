import axios from './request';
export function getDujitang() {
	return axios.get('/api/dujitang').then(res => {
		return res.data;
	});
}