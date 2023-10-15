import { client } from './client';
import {
  ACCOUNT_A_ID,
  ACCOUNT_B_ID,
  PROJECT_A_ID,
  PROJECT_A_ROLE_ID,
} from './constants';

export async function seedProjectAccount() {
  await client.projectAccount.create({
    data: {
      projectId: PROJECT_A_ID,
      roleId: PROJECT_A_ROLE_ID,
      accountId: ACCOUNT_A_ID,
    },
  });

  await client.projectAccount.create({
    data: {
      projectId: PROJECT_A_ID,
      roleId: PROJECT_A_ROLE_ID,
      accountId: ACCOUNT_B_ID,
    },
  });
}
