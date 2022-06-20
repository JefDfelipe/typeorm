import { ProductsEntity} from '../../../entities/products-entity';
import { ProductsDTO } from '../../../features/products/dto/products-dto';

export class ProductsRepository {
    async find() {
        const products = await ProductsEntity.find();

        return products;
    }

    async findOne(id: string) {
        const product = await ProductsEntity.findOne(id);
        
        return product;
    }

    async create(productDTO: ProductsDTO) {
        const product = await new ProductsEntity(productDTO.name, productDTO.description, productDTO.category_id);
        product.save();

        return product;
    }

    async update(productDTO: ProductsDTO) {
        const product = await ProductsEntity.findOne(productDTO.id);

        if (product) {
            product.name = productDTO.name;
            product.description = productDTO.description;
            await product.save();
        }

        return product;
    }

    async delete(productID: string) {
        //todo productDTO.id
        await ProductsEntity.delete(productID);
    }
}