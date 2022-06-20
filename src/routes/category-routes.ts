import { Router } from 'express'
import { CategoryController } from '../features/categories/controllers/category-controller';
import { CategoryService } from '../features/categories/services/category-services';

const routes = Router();
const service = new CategoryService();
const controller = new CategoryController(service);

routes.post('/category', controller.store);
routes.get('/category', controller.index);
// routes.get('/category/:id', controller.show);
// routes.put('/category/:id', controller.update);
// routes.delete('/category/:id', controller.delete);

export { routes }