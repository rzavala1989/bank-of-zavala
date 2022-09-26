import { callAPI } from './base';

//find users card
export const findMyCards = () => callAPI('/cards/my', 'GET');
//find single card
export const findSingleCard = (cardId) => callAPI(`/cards/${cardId}`, 'GET');
//update pin
export const updatePin = (cardId, data) =>
  callAPI(`/cards/${cardId}/pin`, 'PUT', data);
//change limits
export const updateLimit = (cardId, data) =>
  callAPI(`/cards/${cardId}/limit`, 'PUT', data);
