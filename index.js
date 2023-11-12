import axios from 'axios';
import { tasksUrl } from './constants.js';
import { writeFile } from 'fs';

// TODO: App will run constantly 
// TODO: There will be keypress events to trigger stuff on console, like clear & run

axios
	.get(tasksUrl)
	.then((res) => {
		console.log(res.data);

		writeFile('logs/data.html', res.data, (err) => {
			if (err) throw err;

			console.log('The file has been saved!');
		});

		return;
	})
	.catch((err) => console.error(err));
