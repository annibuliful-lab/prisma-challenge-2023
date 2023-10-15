import { client } from './client';
import {
  PROJECT_A_ID,
  PROJECT_A_ROLE_ID,
  PROJECT_B_ID,
  PROJECT_B_ROLE_ID,
} from './constants';

export async function projectRole() {
  await client.projectRole.create({
    data: {
      id: PROJECT_A_ROLE_ID,
      projectId: PROJECT_A_ID,
      title: 'ADMIN',
    },
  });

  await client.projectRole.create({
    data: {
      id: PROJECT_B_ROLE_ID,
      projectId: PROJECT_B_ID,
      title: 'ADMIN',
    },
  });
}
