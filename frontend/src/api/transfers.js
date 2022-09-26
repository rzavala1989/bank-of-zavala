import { callAPI } from './base';

//get user transfers
export const getMyTransfers = () => callAPI('/transfers/my', 'GET');
//get single transfer
export const getSingleTransfer = (transferId) =>
  callAPI(`/transfers/${transferId}`, 'GET');
//create transfer
export const create = (data) => callAPI('/transfers', 'POST', data);
