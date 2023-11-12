import axios from 'axios';
import { tasksUrl } from './constants.js';
import { writeFile } from 'fs';

axios
	.get(tasksUrl)
	.then((res) => {
		console.log(res.data);

		writeFile('data.html', res.data, (err) => {
			if (err) throw err;

			console.log('The file has been saved!');
		});

		return;
	})
	.catch((err) => console.error(err));
