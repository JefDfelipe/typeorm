import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Inventory1649458730209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'inventory',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'quantity',
                    type: 'numeric',
                    isNullable: false
                },
                {
                    name: 'product_id',
                    type: 'uuid',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedTableName: 'products',
                    referencedColumnNames: ['id'],
                    columnNames: ['product_id']
                })
            ]
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('inventory', true, true, true);
    };
};