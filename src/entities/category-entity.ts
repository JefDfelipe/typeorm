import { Column, Entity, PrimaryColumn, BaseEntity } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('category') //explicar novamente sobre name neste parâmetro
export class CategoryEntity extends BaseEntity {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description?: string;

    @Column()
    tag?: string;

    constructor(name: string, description: string, tag: string) {
        super(); //se não importar BaseEntity, não se usa super();
        this.name = name;
        this.description = description;
        this.tag = tag;

        if (!this.id) {
            this.id = uuid()
        };
    };
};