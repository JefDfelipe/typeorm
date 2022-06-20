import { CategoryEntity } from '../../../entities/category-entity';
import { CategoryDTO } from '../../../features/categories/dto/category-dto';

export class CategoryRepository {
    async find() {
        const categories = await CategoryEntity.find();

        return categories;
    }

    async findOne(id: string) {
        const category = await CategoryEntity.findOne(id);

        return category;
    }

    async create(categoryDTO: CategoryDTO) {
        const category = await new CategoryEntity(categoryDTO.name, categoryDTO.description, categoryDTO.tag);
        category.save();

        return category;
    }

    async update(categoryDTO: CategoryDTO) {
        const category = await CategoryEntity.findOne(categoryDTO.id);

        if (category) {
            category.name = categoryDTO.name;
            category.description = categoryDTO.description;
            category.tag = categoryDTO.tag;
            await category.save();
        }

        return category;
    }

    async delete(id:string) {
        await CategoryEntity.delete(id);
    }
}