import { Person } from "@PersonModel/person.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import CContact = Controller.Contact;

@Entity()
export class Contact implements Model.Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: ContactType;

  @Column({ length: 255 })
  description: string;  

  @ManyToOne(type => Person, { onDelete: "CASCADE" })
  person: number;

  constructor(contact: Model.Contact | CContact.ReqBodyPost | CContact.ReqBodyPatch) {
	contact?.id && (this.id = contact.id);
	contact?.description && (this.description = contact.description);
	contact?.type && (this.type = contact.type as ContactType);
	contact?.personId && (this.person = contact.personId);
  }
}
