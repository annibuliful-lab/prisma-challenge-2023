import { seedAccount } from './account';
import { seedProject } from './project';

async function main() {
  await seedProject();
  await seedAccount();
}

main();
