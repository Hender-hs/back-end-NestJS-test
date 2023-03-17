import { Controller, Delete, Get, Patch, Post, Param, Body } from "@nestjs/common";

import CPerson = Controller.Person;

@Controller("person")
export class PersonController {

  constructor() {}

  @Get("all")
  getPeople(): string {
	return "";
  }

  @Get(":id")
  getPerson(@Param("id") id: string): string {
	return "";
  }

  @Post("create")
  createPerson(@Body() body: CPerson.ReqBodyPost): string {
	return "";	
  }

  @Patch(":id")
  updatePerson(@Param("id") id: string, 
			   @Body() body: CPerson.ReqBodyPatch): string {
	return "";	
  }

  @Delete(":id")
  deletePerson(@Param("id") id: string): string {
	return "";	
  }
}
