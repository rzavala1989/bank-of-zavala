type Account = {
  id: string,
  type: 'basic' | 'premium' | 'gold',
  is_active: boolean,
  sortcode: boolean,
  number: number,
  current_balance: number,
};

export default Account;
