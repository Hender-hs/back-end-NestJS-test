type ContactType = "email" | "tel";



declare namespace Controller {
  namespace Person {

	interface ReqBodyPost {
	  id?: number;
	  name: string;
	  cpf: string;
	}

	interface ReqBodyPatch {
	  id?: number;
	  name?: string;
	  cpf?: string;
	}
  }

  namespace Contact {

	interface ReqBodyPost {
	  id?: number;
	  type: ContactType;
	  description: string;
	  personId?: number;
	}
	
	interface ReqBodyPatch {
	  id?: number;
	  type?: ContactType;
	  description?: string;
	  personId?: number;
	}
  }
}


declare namespace Model {

  interface Person {
	id: number;
	name: string;
	cpf: string;
  }

  interface Contact {
	id: number;
	type: ContactType;
	description: string;
	person?: number;
	personId?: number;
  }
}
