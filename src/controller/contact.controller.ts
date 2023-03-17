import { Controller, Post, Patch, Get, Delete, Param, Body } from "@nestjs/common";

import CContact = Controller.Contact;

@Controller("contact")
export class ContactController {
  constructor() {}

  @Get("all")
  getContacts(): string {
	return "";
  }

  @Get(":id")
  getContact(@Param("id") id: string): string {
	return "";
  }

  @Post()
  createContact(@Body() body: CContact.ReqBodyPost): string {
	return "";
  }

  @Patch(":id")
  updateContact(@Param("id") id: string, 
				@Body() body: CContact.ReqBodyPatch): string {
	return "";
  }

  @Delete(":id")
  deleteContact(@Param("id") id: string): string {
	return "";
  }
}
