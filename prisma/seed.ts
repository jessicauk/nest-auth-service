import { prisma } from '../lib/prisma.js';
import { RoleName } from '../generated/prisma/client.js';

async function main() {
  await prisma.role.upsert({
    where: { name: RoleName.USER },
    update: {},
    create: { name: RoleName.USER, description: 'Default role' },
  });

  await prisma.role.upsert({
    where: { name: RoleName.ADMIN },
    update: {},
    create: { name: RoleName.ADMIN, description: 'Admin role' },
  });

  console.log('✅ Seed done: USER, ADMIN');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
