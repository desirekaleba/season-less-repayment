import { Request, Response, NextFunction } from 'express';
import { SERVER_ERROR } from '../constants/statusCodes';

export const asyncHandler =
    (cb: any) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            await cb(req, res, next);
        } catch (err) {
            next(err);
        }
        return true;
    };
