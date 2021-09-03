import { Router } from 'express';
import { IRoute } from '../interfaces/route.interface';
import { SeasonController } from '../controllers';

import { asyncHandler } from '../middlewares';

export class SeasonRoute implements IRoute {
    public path = '/season';
    public router = Router();

    constructor(private readonly seasonController: SeasonController) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router
            .route(`${this.path}`)
            .post(asyncHandler(this.seasonController.createSeason))
            .get(asyncHandler(this.seasonController.getAll));

        this.router
            .route(`${this.path}/:seasonId`)
            .get(asyncHandler(this.seasonController.getById));

        this.router
            .route(`${this.path}/byName`)
            .post(asyncHandler(this.seasonController.getByName));
    }
}
