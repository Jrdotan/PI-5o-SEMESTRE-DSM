import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClienteModule } from './cliente/cliente.module';
import { OrcamentoModule } from './orcamento/orcamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    ClienteModule,
    OrcamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
=======
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UsersService, JwtService, PrismaService],
>>>>>>> parent of ec26d7d (Merge pull request #27 from jonathannrocha/main)
})
export class AppModule {}

