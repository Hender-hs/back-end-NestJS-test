import { IsString } from 'class-validator';

import CContact = Controller.Contact;
import CPerson = Controller.Person;

type CreatePersonBodyRequest = CPerson.ReqBodyPost & CContact.ReqBodyPost;
type UpdatePersonBodyRequest = CPerson.ReqBodyPatch & CContact.ReqBodyPatch;

export class CreatePersonDto implements CreatePersonBodyRequest {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  type: string;

  @IsString()
  description: string;
}


export class UpdatePersonDto implements UpdatePersonBodyRequest {
  @IsString()
  name?: string;

  @IsString()
  cpf?: string;

  @IsString()
  type?: string;

  @IsString()
  description?: string;
}


