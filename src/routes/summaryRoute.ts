import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';
import { CustomerSummaryController } from '../controllers';

import { asyncHandler } from '../middlewares';

export class CustomerSummaryRoute implements IRoute {
    public path = '/summary';
    public router = Router();

    constructor(private readonly customerSummaryController: CustomerSummaryController) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router
            .route(`${this.path}`)
            .get(asyncHandler(this.customerSummaryController.getAll));

        this.router
            .route(`${this.path}/:customerId/byCustomer`)
            .get(asyncHandler(this.customerSummaryController.getByCustomer));

        this.router
            .route(`${this.path}/:seasonId/bySeason`)
            .get(asyncHandler(this.customerSummaryController.getBySeason));

        this.router
            .route(`${this.path}/:customerId/:seasonId/byCustomerAndSeason`)
            .get(asyncHandler(this.customerSummaryController.getByCustomerAndSeason));
    }
}