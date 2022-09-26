import { callAPI } from './base';

//Get user accts
export const findMyAccount = () => callAPI('/accounts/my', 'GET');

//Get single acct
export const findSingleAccount = (accountId) =>
  callAPI(`/accounts/${accountId}`, 'GET');
