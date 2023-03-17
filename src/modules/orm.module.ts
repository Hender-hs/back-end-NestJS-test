import { ModuleMetadata } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmOptions: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true
};

const mysqlDbModule = TypeOrmModule.forRoot(typeOrmOptions)

const moduleMetadata: ModuleMetadata = {
  imports: [mysqlDbModule]
}

@Module(moduleMetadata)
export class ORMModule {}

