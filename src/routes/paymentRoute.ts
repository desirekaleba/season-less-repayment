import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';
import { PaymentController } from '../controllers';

import { asyncHandler } from '../middlewares';

export class PaymentRoute implements IRoute {
    public path = '/payment';
    public router = Router();

    constructor(private readonly paymentController: PaymentController) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router
            .route(`${this.path}`)
            .post(asyncHandler(this.paymentController.createPayment));
    }
}