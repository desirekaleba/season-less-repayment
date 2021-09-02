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
    }
}