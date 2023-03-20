import { IsString, IsNumber } from 'class-validator';

import CContact = Controller.Contact;

type CreateContactBodyRequest = CContact.ReqBodyPost;
type UpdateContactBodyRequest = CContact.ReqBodyPatch;

export class CreateContactDto implements CreateContactBodyRequest {
  @IsString()
  type: string;

  @IsString()
  description: string;
}

export class UpdateContactDto implements UpdateContactBodyRequest {
  @IsString()
  type?: string;

  @IsString()
  description?: string;
}


