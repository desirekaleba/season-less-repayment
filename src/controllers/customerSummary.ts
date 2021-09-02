import { Request, Response } from 'express';
import { CreateCustomerSummaryDto } from '../dtos/createCustomerSummary';
import { CustomerSummaryService } from '../database/services/CustomerSummary';
import { CREATED, OK } from '../constants/statusCodes';

export class CustomerSummaryController {
    constructor(
        private customerSummaryService: CustomerSummaryService
    ) { }

    createCustomerSummary = async (req: Request, res: Response) => {
        const { customerId, seasonId, totalPaid, totalCredit }: CreateCustomerSummaryDto = req.body;
        const customerSummary = await this.customerSummaryService.create({ customerId, seasonId, totalPaid, totalCredit });
        res.status(CREATED).json({
            status: 'success',
            message: 'Customer summary created successfully',
            data: customerSummary
        });
    };

    getAll = async (req: Request, res: Response) => {
        const summaries = await this.customerSummaryService.getAll();
        res.status(OK).json({
            status: 'success',
            data: summaries
        });
    };

    getByCustomerAndSeason = async (req: Request, res: Response) => {
        const { customerId, seasonId } = req.params;
        const summaries = await this.customerSummaryService.getByCustomerAndSeason(Number(customerId), Number(seasonId));
        res.status(OK).json({
            status: 'success',
            data: summaries
        });
    };

    getByCustomer = async (req: Request, res: Response) => {
        const { customerId } = req.params;
        const summaries = await this.customerSummaryService.getByCustomer(Number(customerId));
        res.status(OK).json({
            status: 'success',
            data: summaries
        });
    };

    getBySeason = async (req: Request, res: Response) => {
        const { seasonId } = req.params;
        const summaries = await this.customerSummaryService.getBySeason(Number(seasonId));
        res.status(OK).json({
            status: 'success',
            data: summaries
        });
    }
}

