import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

    // data cleanup
  await prisma.user.deleteMany();
  await prisma.store.deleteMany();


  //create a store
  const store = await prisma.store.create({
    data: {
      name: 'Loja Principal',
      imagePath: '/uploads/store-logo.png',
    },
  });

  //create user
  const hashedPassword = await bcrypt.hash('123456', 10);

  const user = await prisma.user.create({
    data: {
      firstName: 'Jonathan',
      lastName: 'Santana',
      email: 'jonathan@example.com',
      password: hashedPassword,
      cpf: '12345678900',
      phoneNumber: '11999999999',
      storeId: store.id,
    },
  });

  console.log({ store, user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Erro no seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
