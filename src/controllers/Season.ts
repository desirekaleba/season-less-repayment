import { Request, Response } from 'express';
import { CreateSeasonDto } from '../dtos/createSeason';
import { SeasonService } from '../database/services/Season';
import { CREATED, OK } from '../constants/statusCodes';

export class SeasonController {
    constructor(
        private seasonService: SeasonService
    ) { }

    createSeason = async (req: Request, res: Response) => {
        const { seasonName, startDate, endDate }: CreateSeasonDto = req.body;
        const season = await this.seasonService.create({ seasonName, startDate, endDate });
        res.status(CREATED).json({
            status: 'success',
            message: 'Season created successfully',
            data: season
        });
    };

    getAll = async (req: Request, res: Response) => {
        const seasons = await this.seasonService.getAll();
        res.status(OK).json({
            status: 'success',
            data: seasons
        });
    };

    getById = async (req: Request, res: Response) => {
        const { seasonId } = req.params;
        const season = await this.seasonService.getById(Number(seasonId));
        return res.status(OK).json({
            status: 'success',
            data: season
        });
    };

    getByName = async (req: Request, res: Response) => {
        const { seasonName } = req.body;
        const seasons = await this.seasonService.getByName(seasonName);
        res.status(OK).json({
            status: 'success',
            data: seasons
        });
    };
}

