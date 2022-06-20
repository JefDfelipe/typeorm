import { Column, Entity, PrimaryColumn, BaseEntity, JoinColumn, OneToMany } from "typeorm";
import { CategoryEntity } from "./category-entity"
import { v4 as uuid } from "uuid";

@Entity('products') //explicar novamente sobre name neste parâmetro
export class ProductsEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    category_id: string;

    @OneToMany(() => CategoryEntity, category => category.id)
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity

    constructor(name: string, description: string, tag: string) {
        super(); //se não importar BaseEntity, não se usa super();
        this.name = name;
        this.description = description;
        this.category_id = tag;

        if (!this.id) {
            this.id = uuid()
        };
    };
};