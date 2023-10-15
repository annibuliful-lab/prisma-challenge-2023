import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function main() {
  //   const itXtoberAccount = await client.account.create({
  //     data: {
  //       id: 'itXtoberAccountId',
  //       username: 'itXtoberAccount',
  //       password: 'password',
  //     },
  //   });

  //   const tarPrismaAccount = await client.account.create({
  //     data: {
  //       id: 'tarPrismaAccountId',
  //       username: 'tarPrismaAccount',
  //       password: 'password',
  //     },
  //   });
  //   console.log('account', { itXtoberAccount, tarPrismaAccount });

  const tar = await client.account.findFirst({
    where: {
      username: 'tarPrismaAccount',
    },
  });

  const count = await client.account.count({
    where: {},
  });

  console.log('getI', count);
}

main();
