import { ContactController } from "@controllers/contact.controller";
import { Contact } from "@models/contact.entity";
import { Person } from "@models/person.entity";
import { Module, ModuleMetadata } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContactService } from "@services/contact.service";
import { PersonService } from "@services/person.service";

const moduleMetaData: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([Contact]), TypeOrmModule.forFeature([Person])],
  exports: [TypeOrmModule],
  controllers: [ContactController],
  providers: [ContactService, PersonService]
};

@Module(moduleMetaData)
export class ContactModule {}
