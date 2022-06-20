import { CategoryEntity } from '../../entities/category-entity';
import { CategoryDTO } from '../../features/categories/dto/category-dto';

export interface ICategoryService {
    find(): Promise<CategoryEntity[]>;
    findOne(id: string): Promise<CategoryEntity | undefined>
    create(categoryDTO: CategoryDTO): Promise<CategoryEntity>
    update(categoryDTO: CategoryDTO): Promise<CategoryEntity | undefined>
    delete(id: string) : Promise<void>
}