import { InventoryEntity } from '../../../entities/inventory-entity';
import { InventoryDTO } from '../../../features/invetory/dto/inventory-dto';

export class InventoryRepository {
    async find() {
        const livros = await InventoryEntity.find();

        return livros;
    }

    async findOne(id: number) {
        const livros = await InventoryEntity.findOne(id);
        
        return livros;
    }

    async create(inventoryDTO: InventoryDTO) {
        const inventory = await new InventoryEntity(inventoryDTO.quantity, inventoryDTO.product_id);
        inventory.save();

        return inventory;
    }

    async update(inventoryDTO: InventoryDTO) {
        const inventory = await InventoryEntity.findOne(inventoryDTO.id);

        if (inventory) {
            inventory.quantity = inventoryDTO.quantity;
            inventory.product_id = inventoryDTO.product_id;
            await inventory.save();
        }

        return inventory;
    }

    async delete(livroID: number) {
        await InventoryEntity.delete(livroID);
    }
}