import { getRepository } from 'typeorm';
import { CategoryEntity } from '../../../entities/category-entity';
import { CategoryRepository } from '../../../core/database/repositories';
import { CategoryDTO } from '../dto/category-dto';
import { ICategoryService } from '../../../contracts/services';
import { defaultErrorMessage } from '../../../constants';

export class CategoryService implements ICategoryService {
    async create({ name, description, tag }: CategoryDTO): Promise<CategoryEntity> {
        const repo = new CategoryRepository();

        if (await repo.findOne(name)) {
            throw new Error(`Category ${name} already exists`);
        }

        const newCategory = await repo.create({name, description, tag});

        return newCategory;
    };

    async find() {
        const repo = getRepository(CategoryEntity);
        const category = await repo.find();

        return category;
    };

    async findOne(id: string) {
        const repo = new CategoryRepository();
        const category = await repo.findOne(id);

        return category;
    };

    async update(categoryDTO: CategoryDTO) {
        const repo = new CategoryRepository();
        const category = await repo.update(categoryDTO);

        return category;
    };

    async delete(id: string) {
        const repo = new CategoryRepository();
        await repo.delete(id);
    };
};