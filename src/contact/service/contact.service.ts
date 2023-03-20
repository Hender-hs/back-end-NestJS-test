import { Contact } from "@ContactModel/contact.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, FindOptionsWhere, Like, Repository } from "typeorm";

import CContact = Controller.Contact;

@Injectable()
export class ContactService {
  
  constructor(
	@InjectRepository(Contact)
	private ContactRepositoryModel: Repository<Contact>,
  ) {}
  
  async findAll(search?: string): Promise<Contact[]> {
	const options: FindOneOptions<Contact> = {
	  where: {
		...(search && { description: Like(`%${search}%`) })
	  },
	  relations: ["person"]
	};
	return await this.ContactRepositoryModel.find(options);
  }

  async findOne(id: number): Promise<Contact> { 
	const options: FindOneOptions<Contact> = {
	  where: { id },
	  relations: ["person"]
	};
	return await this.ContactRepositoryModel.findOne(options);
  }

  async create(body: CContact.ReqBodyPost | Model.Contact): Promise<Contact> { 
	const contact = new Contact(body);
	return await this.ContactRepositoryModel.save(contact);
  }

  async update(id: number, body: CContact.ReqBodyPatch): Promise<Contact> {
	const contact = new Contact({ id, ...body }); 
	return await this.ContactRepositoryModel.save(contact);
  }

  async delete(id: number): Promise<number | null> {
	const options: FindOptionsWhere<Contact> = {
	  id
	};
	return (await this.ContactRepositoryModel.delete(options))?.affected;
  }
}

