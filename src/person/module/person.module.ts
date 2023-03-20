import { Contact } from "@ContactModel/contact.entity";
import { ContactService } from "@ContactService/contact.service";
import { Module, ModuleMetadata } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "@PersonController/person.controller";
import { Person } from "@PersonModel/person.entity";
import { PersonService } from "@PersonService/person.service";

const moduleMetaData: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([Person]), TypeOrmModule.forFeature([Contact]) ],
  exports: [TypeOrmModule], 
  controllers: [PersonController],
  providers: [PersonService, ContactService]
};

@Module(moduleMetaData)
export class PersonModule {}

