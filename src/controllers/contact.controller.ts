import { Contact } from "@models/contact.entity";
import { Controller, Post, Patch, Get, Delete, Param, Body } from "@nestjs/common";
import { ContactService } from "@services/contact.service";

import CContact = Controller.Contact;

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get("all")
  async getContacts(): Promise<Contact[]> {
	const allContacts = await this.contactService.findAll();
	return allContacts;
  }

  @Get(":id")
  async getContact(@Param("id") id: string):Promise<Contact> {
	const contact = await this.contactService.findOne(parseInt(id));
	return contact;
  }

  @Post("create")
  async createContact(@Body() body: CContact.ReqBodyPost): Promise<Contact> {
	const createdContact = await this.contactService.create(body);
	return createdContact;
  }

  @Patch(":id")
  async updateContact(@Param("id") id: string, 
				@Body() body: CContact.ReqBodyPatch): Promise<Contact> {
	const contactUpdated = await this.contactService.update(Number(id), body);
	return contactUpdated;
  }

  @Delete(":id")
  async deleteContact(@Param("id") id: string): Promise<{ success: boolean }> {
	const wasContactRowAffected = await this.contactService.delete(parseInt(id));
	return { "success": Boolean(wasContactRowAffected) };
  }
}
