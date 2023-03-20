import { ContactController } from "@ContactController/contact.controller";
import { Contact } from "@ContactModel/contact.entity";
import { ContactService } from "@ContactService/contact.service";
import { Module, ModuleMetadata } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person } from "@PersonModel/person.entity";
import { PersonService } from "@PersonService/person.service";

const moduleMetaData: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([Contact]), TypeOrmModule.forFeature([Person])],
  exports: [TypeOrmModule],
  controllers: [ContactController],
  providers: [ContactService, PersonService]
};

@Module(moduleMetaData)
export class ContactModule {}
