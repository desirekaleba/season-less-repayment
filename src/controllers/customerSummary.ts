import { Request, Response } from 'express';
import { CreateCustomerSummaryDto } from '../dtos/createCustomerSummary';
import { CustomerSummaryService } from '../database/services/CustomerSummary';

export class CustomerSummaryController {
    constructor(
        private customerSummaryService: CustomerSummaryService
    ) { }

    createCustomerSummary = async (req: Request, res: Response) => {
        const { customerId, seasonId, totalPaid, totalCredit }: CreateCustomerSummaryDto = req.body;
        const customerSummary = await this.customerSummaryService.create({ customerId, seasonId, totalPaid, totalCredit });
        res.status(201).json({
            status: 'success',
            message: 'Customer summary created successfully',
            data: customerSummary
        });
    };

    getAll = async (req: Request, res: Response) => {
        const summaries = await this.customerSummaryService.getAll();
        res.status(200).json({
            status: 'success',
            data: summaries
        });
    }
}

