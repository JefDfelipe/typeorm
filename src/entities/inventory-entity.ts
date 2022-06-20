import { Column, Entity, PrimaryColumn, BaseEntity, JoinColumn, ManyToOne } from "typeorm";
import { ProductsEntity } from "./products-entity"
import { v4 as uuid } from "uuid";

@Entity('inventory') //explicar novamente sobre name neste parâmetro
export class InventoryEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    quantity: number;

    @Column()
    product_id: string;

    @ManyToOne(() => ProductsEntity, products => products.id)
    @JoinColumn({ name: 'product_id' })
    products: ProductsEntity

    constructor(quantity: number, product_id: string) {
        super(); //se não importar BaseEntity, não se usa super();
        this.quantity = quantity;
        this.product_id = product_id;

        if (!this.id) {
            this.id = uuid()
        };
    };
};