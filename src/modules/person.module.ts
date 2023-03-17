import { PersonController } from "@controllers/person.controller";
import { Contact } from "@models/contact.entity";
import { Person } from "@models/person.entity";
import { Module, ModuleMetadata } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContactService } from "@services/contact.service";
import { PersonService } from "@services/person.service";

const moduleMetaData: ModuleMetadata = {
  imports: [TypeOrmModule.forFeature([Person]), TypeOrmModule.forFeature([Contact]) ],
  exports: [TypeOrmModule], 
  controllers: [PersonController],
  providers: [PersonService, ContactService]
};

@Module(moduleMetaData)
export class PersonModule {}

