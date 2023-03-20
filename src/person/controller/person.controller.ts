import { ContactService } from "@ContactService/contact.service";
import { Controller, Delete, Get, Patch, Post, Param, Body, Header, Query } from "@nestjs/common";
import { Person } from "@PersonModel/person.entity";
import { PersonService } from "@PersonService/person.service";
import { CreatePersonDto, UpdatePersonDto } from "src/validator/person.dto";


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

  @Get()
  async searchPerson(@Query("search") search: string): Promise<Person[]> {
	const person = await this.personService.findAll(search);
	return person;
  }


  @Post("create")
  async createPerson(@Body() body: CreatePersonDto): Promise<Person> {
	const createdPerson = await this.personService.create(body);
	const createdContact = await this.contactService.create({ personId: createdPerson.id, ...body });
	return {...createdPerson, ...createdContact};
  }

  @Patch(":id")
  async updatePerson(@Param("id") id: string,
			   @Query("contactId") contactId: string, 
			   @Body() body: UpdatePersonDto): Promise<Person> {
	const updatedPerson = await this.personService.update(Number(id), body);
	const updatedContact = await this.contactService.update(Number(contactId), body);
	return { ...updatedPerson, ...updatedContact };
  }

  @Delete(":id")
  async deletePerson(@Param("id") id: string): Promise<{ success: boolean }> {
	const wasPersonRowAffected = await this.personService.delete(parseInt(id));
	return { success: Boolean(wasPersonRowAffected) };
  }
}
