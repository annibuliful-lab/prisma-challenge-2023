import { client } from './client';
import { PROJECT_A_ID, PROJECT_B_ID } from './constan';

export async function seedProject() {
  const projectA = await client.project.create({
    data: {
      id: PROJECT_A_ID,
      title: 'Project A',
    },
  });

  const projectB = await client.project.create({
    data: {
      id: PROJECT_B_ID,
      title: 'Project B',
    },
  });
}
