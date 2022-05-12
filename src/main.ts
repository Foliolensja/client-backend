import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true, // allow conversion underneath
      },
    }),
  );
  await app.listen(process.env.PORT || 3333);
}
bootstrap();

// async function test() {
//   const prisma = new PrismaClient();
//   await prisma.$connect();

//   const change = await prisma.indexChange.create({
//     data: {
//       date: new Date(),
//       index_info: [
//         {
//           main: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//           junior: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//           combined: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//           us: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//           financial: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//           manufacturing: {
//             date: '2022-03-03',
//             points: 1.2,
//             change: 1.2,
//             change_percent: 1.2,
//             volume: 2,
//           },
//         },
//       ],
//     },
//   });
//   console.log(change);
// }
// test();

// async function test() {
//   const prisma = new PrismaClient();
//   await prisma.$connect();

//   const day = await prisma.tradingDay.create({
//     data: {
//       date: '2021-03-01',
//       advancing: [
//         {
//           ticker: 'ORB',
//           name: 'Orba',
//           volume: 5000,
//           c_price: 23.25,
//           price_change: 1.53,
//           change: 7.03,
//         },
//         {
//           ticker: 'VIV',
//           name: 'Aviv',
//           volume: 7500,
//           c_price: 33.25,
//           price_change: 2.53,
//           change: 7.44,
//         },
//         {
//           ticker: 'MTRO',
//           name: 'Metro',
//           volume: 30200,
//           c_price: 234.25,
//           price_change: 11.53,
//           change: 9.21,
//         },
//       ],
//       declining: [
//         {
//           ticker: 'ORB',
//           name: 'Orba',
//           volume: 5000,
//           c_price: 23.25,
//           price_change: 1.53,
//           change: 7.03,
//         },
//         {
//           ticker: 'VIV',
//           name: 'Aviv',
//           volume: 7500,
//           c_price: 33.25,
//           price_change: 2.53,
//           change: 7.44,
//         },
//         {
//           ticker: 'MTRO',
//           name: 'Metro',
//           volume: 30200,
//           c_price: 234.25,
//           price_change: 11.53,
//           change: 9.21,
//         },
//       ],
//       trading_firm: [
//         {
//           ticker: 'ORB',
//           name: 'Orba',
//           volume: 5000,
//           c_price: 23.25,
//           price_change: 1.53,
//           change: 7.03,
//         },
//         {
//           ticker: 'VIV',
//           name: 'Aviv',
//           volume: 7500,
//           c_price: 33.25,
//           price_change: 2.53,
//           change: 7.44,
//         },
//         {
//           ticker: 'MTRO',
//           name: 'Metro',
//           volume: 30200,
//           c_price: 234.25,
//           price_change: 11.53,
//           change: 9.21,
//         },
//       ],
//     },
//   });

//   console.log(day);

//   await prisma.userIndex.create({
//     data: {
//       name: 'Orba',
//       ticker: 'ORB',
//       weight: 0.2,
//       portfolio: {
//         connect: {
//           id: '622fba370d46c0c59c88c757',
//         },
//       },
//     },
//   });
//   await prisma.userIndex.create({
//     data: {
//       name: 'Aviv',
//       ticker: 'VIV',
//       weight: 0.2,
//       portfolio: {
//         connect: {
//           id: '622fba370d46c0c59c88c757',
//         },
//       },
//     },
//   });

//   const user = await prisma.user.findUnique({
//     where: {
//       id: '622d640e4806c168f0b9b11b',
//     },
//     include: {
//       portfolio: {
//         include: {
//           indices: true,
//         },
//       },
//     },
//   });

//   const user = await prisma.user.create({
//     data: {
//       firstName: 'Rojae',
//       lastName: 'Martin',
//       hash: '123',
//       email: 'lol@lol.com',
//       portfolio: {
//         create: {
//           indices: {
//             createMany: {
//               data: [
//                 { name: 'Orba', ticker: 'ORB', weight: 0.2 },
//                 { name: 'Aviv', ticker: 'VIV', weight: 0.2 },
//               ],
//             },
//           },
//         },
//       },
//     },
//   });

//   console.log(user);

//   return user;
// }

// test();
