declare namespace Controller {
  namespace Person {

	interface ReqBodyPost {
	  nome: string;
	  cpf: string;
	  type: boolean;
	  description: string;
	}

	interface ReqBodyPatch {
	  nome?: string;
	  cpf?: string;
	  type?: boolean;
	  description?: string;
	}
  }

  namespace Contact {

	interface ReqBodyPost {
	  nome: string;
	  cpf: string;
	  type: boolean;
	  description: string;
	}
	
	interface ReqBodyPatch {
	  nome?: string;
	  cpf?: string;
	  type?: boolean;
	  description?: string;
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
	type: boolean;
	description: string;
	personId: number;
  }
}
