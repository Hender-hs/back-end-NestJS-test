import { Contact } from "@ContactModel/contact.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToMany } from "typeorm";

import CPerson = Controller.Person;

@Entity()
export class Person implements Model.Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 15 })
  cpf: string;  

  @OneToMany(() => Contact, type => type.person)
  contact: Contact[]

  constructor(person: Model.Person | CPerson.ReqBodyPost | CPerson.ReqBodyPatch) {
	person?.id && (this.id = person.id);
	person?.name && (this.name = person.name);
	person?.cpf && (this.cpf = person.cpf);
  }
}
