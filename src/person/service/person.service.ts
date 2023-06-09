import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "@PersonModel/person.entity";
import { FindOneOptions, FindOptionsWhere, Like, Repository } from "typeorm";

import CPerson = Controller.Person;
import CContact = Controller.Contact;
type CreatePostBodyReq = CPerson.ReqBodyPost & CContact.ReqBodyPost;
type UpdatePatchBodyReq = CPerson.ReqBodyPatch & CContact.ReqBodyPatch;


@Injectable()
export class PersonService {
  
  constructor(
	@InjectRepository(Person)
	private personRepositoryModel: Repository<Person>,
  ) {}
  
  async findAll(search?: string): Promise<Person[]> {
	const options: FindOneOptions<Person> = {
	  where: {
		...(search && { name: Like(`%${search}%`) })
	  },
	  relations: ["contact"]
	};
	return await this.personRepositoryModel.find(options);
  }

  async findOne(id: number): Promise<Person> { 
	const options: FindOneOptions<Person> = {
	  where: { id },
	  relations: ["contact"]
	};
	return await this.personRepositoryModel.findOne(options);
  }

  async create(body: CreatePostBodyReq): Promise<Person> { 
	const person = new Person(body);
	return await this.personRepositoryModel.save(person);
  }

  async update(id: number, body: UpdatePatchBodyReq): Promise<Person> {
	const person = new Person({ id, ...body}); 
	return await this.personRepositoryModel.save(person);
  }

  async delete(id: number): Promise<number | null> {
	const options: FindOptionsWhere<Person> = {
	  id
	};
	return (await this.personRepositoryModel.delete(options))?.affected;
  }
}

