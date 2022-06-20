import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Products1649457983731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'category_id',
                    type: 'uuid',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedTableName: 'category',
                    referencedColumnNames: ['id'],
                    columnNames: ['category_id']
                })
                /*segunda forma
                name: 'fk_category',
                columnNames: ['category_id']
                referencedTableName: 'category',
                referencedColumnNames: ['id'],
                */
            ]
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products', true, true, true);
    }

}
