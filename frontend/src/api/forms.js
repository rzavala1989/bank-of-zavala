import { callAPI } from './base';

//send form
export const sendForm = (data) => callAPI('/forms', 'POST', data);
