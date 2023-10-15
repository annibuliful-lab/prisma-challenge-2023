import { client } from './client';
import { PROJECT_A_ID, PROJECT_B_ID } from './constants';

export async function seedProject() {
  await client.project.create({
    data: {
      id: PROJECT_A_ID,
      title: 'Project A',
    },
  });

  await client.project.create({
    data: {
      id: PROJECT_B_ID,
      title: 'Project B',
    },
  });
}
