import { callAPI } from './base';

//get user messages
export const getMyMessages = () => callAPI('/messages/my', 'GET');
//get single message
export const getSingleMessage = (messageId) =>
  callAPI(`/messages/${messageId}`, 'GET');
//toggle read status
export const toggleReadStatus = (messageId) =>
  callAPI(`/messages/${messageId}/toggle-read`, 'PUT');
//delete message
export const remove = (messageId) =>
  callAPI(`/messages/${messageId}/delete`, 'DELETE');
