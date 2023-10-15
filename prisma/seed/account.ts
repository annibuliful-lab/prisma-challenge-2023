import { client } from './client';

export async function seedAccount() {
  const accountA = await client.account.create({
    data: {
      username: 'account-a',
      password: '12345678',
    },
  });

  const accountB = await client.account.create({
    data: {
      username: 'account-b',
      password: '12345678',
    },
  });
}
