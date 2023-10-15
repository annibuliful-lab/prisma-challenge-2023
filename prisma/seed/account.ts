import { client } from './client';
import { ACCOUNT_A_ID, ACCOUNT_B_ID } from './constants';

export async function seedAccount() {
  const accountA = await client.account.create({
    data: {
      id: ACCOUNT_A_ID,
      username: 'account-a',
      password: '12345678',
    },
  });

  const accountB = await client.account.create({
    data: {
      id: ACCOUNT_B_ID,
      username: 'account-b',
      password: '12345678',
    },
  });
}
