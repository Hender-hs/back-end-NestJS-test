import { Contact } from "@ContactModel/contact.entity";
import { ContactModule } from "@ContactModule/contact.module";
import { ModuleMetadata } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Person } from "@PersonModel/person.entity";
import { PersonModule } from "@PersonModule/person.module";
import * as dotenv from "dotenv"; 

dotenv.config();

const typeOrmOptions: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Person, Contact],
  migrations: ["@/migrations"],
  synchronize: true
};

const mysqlDbModule = TypeOrmModule.forRoot(typeOrmOptions)

const moduleMetadata: ModuleMetadata = {
  imports: [mysqlDbModule, ContactModule, PersonModule],
}

@Module(moduleMetadata)
export class ORMModule {}

