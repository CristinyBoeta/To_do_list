import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { CobrancaModule } from './cobranca/cobranca.module';
import { DetalheBoletoModule } from './detalhe-boleto/detalhe-boleto.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_DATABASE: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get('MONGO_USERNAME');
        const password = configService.get('MONGO_PASSWORD');
        const database = configService.get('MONGO_DATABASE');
        const host = configService.get('MONGO_HOST');

        console.log('mongourl: '+ `mongodb://${username}:${password}@${host}:27017/${database}`);

        return {
          uri: `mongodb://${username}:${password}@${host}:27017/${database}`,
          dbName: database,
          useCreateIndex: true,
        };
      },
      inject: [ConfigService],
    }),
    CobrancaModule,
    DetalheBoletoModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
