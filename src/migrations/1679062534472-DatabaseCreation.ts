import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableOptions } from "typeorm"

export class DatabaseCreation1679062534472 implements MigrationInterface {

	private generatePersonTable() {
	  const personTableConfig: TableOptions = {
		name: "person",
		columns: [
		  {
			name: "id",
			type: "int",
			isPrimary: true
		  },
		  {
			name: "name",
			type: "varchar",
		  },
		  {
			name: "cpf",
			type: "varchar(15)",
		  }
		]
	  }
	  return new Table(personTableConfig);
	}

	private generateContactTable() {
	  const contactTableConfig: TableOptions = {
		name: "contact",
		columns: [
		  {
			name: "id",
			type: "int",
			isPrimary: true
		  },
		  {
			name: "type",
			type: "varchr",
		  },
		  {
			name: "description",
			type: "varchar",
		  },
		  {
			name: "personId",
			type: "int"
		  }
		]
	  }
	  return new Table(contactTableConfig);
	}

    public async up(queryRunner: QueryRunner): Promise<void> {
	  const personTable = this.generatePersonTable();	
	  await queryRunner.createTable(personTable, true); 

	  const contactTable = this.generateContactTable();	
	  await queryRunner.createTable(contactTable, true);

	  await queryRunner.createForeignKey(
		"contact",
		new TableForeignKey({
		  columnNames: ["personId"],
		  referencedColumnNames: ["id"],
		  referencedTableName: "person",
		  onDelete: "CASCADE"
		})
	  );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
	  await queryRunner.dropTable("contact");
	  await queryRunner.dropTable("person");
    }

}
