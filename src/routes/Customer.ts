import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';
import { CustomerController } from '../controllers';

import { asyncHandler } from '../middlewares';

export class CustomerRoute implements IRoute {
    public path = '/customer';
    public router = Router();

    constructor(private readonly customerController: CustomerController) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router
            .route(`${this.path}`)
            .post(asyncHandler(this.customerController.createCustomer))
            .get(asyncHandler(this.customerController.getAll));

        this.router
            .route(`${this.path}/:customerId`)
            .get(asyncHandler(this.customerController.getById));

        this.router
            .route(`${this.path}/byName`)
            .post(asyncHandler(this.customerController.getByName));
    }
}