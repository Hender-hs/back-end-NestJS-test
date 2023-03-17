import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Person } from "./person.entity";

import CContact = Controller.Contact;

@Entity()
export class Contact implements Model.Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: ContactType;

  @Column({ length: 255 })
  description: string;  

  @ManyToOne(type => Person)
  person: number;

  constructor(contact: Model.Contact | CContact.ReqBodyPost | CContact.ReqBodyPatch) {
	contact?.id && (this.id = contact.id);
	contact?.description && (this.description = contact.description);
	contact?.type && (this.type = contact.type);
	contact?.personId && (this.person = contact.personId);
  }
}
