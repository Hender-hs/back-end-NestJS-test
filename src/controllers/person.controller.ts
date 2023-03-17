import { Person } from "@models/person.entity";
import { Controller, Delete, Get, Patch, Post, Param, Body, Header } from "@nestjs/common";
import { ContactService } from "@services/contact.service";
import { PersonService } from "@services/person.service";

import CPerson = Controller.Person;
import CContact = Controller.Contact;
type CreatePostBodyReq = CPerson.ReqBodyPost & CContact.ReqBodyPost;
type UpdatePatchBodyReq = CPerson.ReqBodyPatch & CContact.ReqBodyPatch;

@Controller("person")
export class PersonController {

  constructor(
	private readonly personService: PersonService,
	private readonly contactService: ContactService
  ) {}

  @Get("all")
  async getPeople(): Promise<Person[]> {
	const allPersons = await this.personService.findAll();
	return allPersons;
  }

  @Get(":id")
  async getPerson(@Param("id") id: string): Promise<Person> {
	const person = await this.personService.findOne(parseInt(id));
	return person;
  }

  @Post("create")
  async createPerson(@Body() body: CreatePostBodyReq): Promise<Person> {
	const createdPerson = await this.personService.create(body);
	const createdContact = await this.contactService.create({ personId: createdPerson.id, ...body });
	return {...createdPerson, ...createdContact};
  }

  @Patch(":id")
  async updatePerson(@Param("id") id: string, 
			   @Body() body: UpdatePatchBodyReq): Promise<Person> {
	const updatedPerson = await this.personService.update(Number(id), body);
	return updatedPerson;
  }

  @Delete(":id")
  async deletePerson(@Param("id") id: string): Promise<{ success: boolean }> {
	const wasPersonRowAffected = await this.personService.delete(parseInt(id));
	return { success: Boolean(wasPersonRowAffected) };
  }
}
