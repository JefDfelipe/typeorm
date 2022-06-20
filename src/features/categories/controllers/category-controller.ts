import { Request, Response } from 'express';
import { CategoryService } from '../services/category-services'

import { HttpError } from '../../../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../../../constants';
import { ICategoryService } from '../../../contracts/services';

export class CategoryController {
    constructor(private service: ICategoryService) {}

    async store(req: Request, res: Response) {
        const { name, description, tag } = req.body;
        const service = new CategoryService();

        try {
            const category = await service.create({
                name: name,
                description: description,
                tag: tag
            });

            return res.json(category);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode)
        };
        // const result = await service.execute({
        //     name,
        //     description,
        //     tag
        // });

        // if (result instanceof Error) {
        //     return res.status(400).json(result.message)
        // }

        // return res.status(200).json(result);

    };

    async index(res: Response) {
        const service = new CategoryService();

        try {
            const categories = await service.find();

            return res.json(categories.map((category) => {
                return {
                    name: category.name.toUpperCase()
                };
            }));
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        };
    };

    // async show(req: Request, res: Response) {
    //     const { id } = req.params
    //     const service = await new CategoryService();

    //     try {
    //         const category = await service.findOne(id);

    //         return res.json({
    //             name: category.name.toUpperCase()
    //         });
    //     } catch (error) {
    //         throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    //     };
    // };

    // async update(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const { name, description, tag } = req.body;
    //     const service = new CategoryService();

    //     try {
    //         const category = await service.update({
    //             id: id,
    //             name: name,
    //             description: description,
    //             tag: tag
    //         });

    //         return res.json(category);
    //     } catch (error) {
    //         throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    //     };
    // };

    // async delete(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const service = new CategoryService();

    //     try {
    //         await service.delete(id);

    //         return res.sendStatus(204);
    //     } catch (error) {
    //         throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    //     };
    // };
};