import { getConnection } from 'typeorm';
import { CreateSeasonDto } from '../../dtos/createSeason';
import { Season } from '../entities/Season';
import { findAll, findById, findByName } from '../queries/Season';

export class SeasonService {
    create = async (seasonInput: CreateSeasonDto) => {
        return await Season.create(seasonInput).save();
    };

    getAll = async () => {
        const seasons = await getConnection().manager.query(
            findAll(),
        );
        return seasons;
    };

    getById = async (seasonId: number) => {
        const season = await getConnection().manager.query(
            findById(seasonId),
        );
        return season;
    };

    getByName = async (seasonName: string) => {
        const seasons = await getConnection().manager.query(
            findByName(seasonName),
        );
        return seasons;
    };
}
