import 'dotenv/config';
import { prisma } from './lib/prisma.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const password = '123456';

const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      email: 'jessica.uk@gmail.com',
      passwordHash,
      roles: {
        create: [
          {
            role: { connect: { name: 'USER' } },
          },
          {
            role: { connect: { name: 'ADMIN' } },
          },
        ],
      },
    },
  });

  console.log('Created user:', user);

  // Fetch all users
  const allUsers = await prisma.user.findMany();

  console.log('All users:', JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
