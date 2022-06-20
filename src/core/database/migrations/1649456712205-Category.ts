import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Category1649456712205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'category',
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
                    name: 'tag',
                    type: 'varchar'
                }
            ]
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category', true, true, true);
    };
};
