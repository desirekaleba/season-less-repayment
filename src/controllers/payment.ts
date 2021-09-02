import { Request, Response } from 'express';
import { CreatePaymentDto } from '../dtos/createPayment';
import { PaymentService } from '../database/services/Payment';
import { CustomerSummaryService } from '../database/services/CustomerSummary';
import { CREATED, OK, SERVER_ERROR } from '../constants/statusCodes';

export class PaymentController {
    constructor(
        private paymentService: PaymentService,
        private customerSummaryService: CustomerSummaryService
    ) { }

    createPayment = async (req: Request, res: Response) => {
        const { customerId, seasonId, amount, date }: CreatePaymentDto = req.body;

        if (!seasonId) {

            // The cascade
            let count = 0;
            const currentCustomerSummaries = await this.customerSummaryService.getByCustomer(customerId);
            (async function cascade(context: PaymentController, balanceAmount) {

                const { id, customer_id, season_id, total_paid, total_credit } = currentCustomerSummaries[count];
                const customerId = customer_id;
                const seasonId = season_id;
                const amount = balanceAmount;
                let totalPaid_ = Number(total_paid) + Number(balanceAmount);
                const totalCredit = Number(total_credit);
                if ((totalPaid_ > totalCredit) && (count < (currentCustomerSummaries.length) - 1)) {
                    count++;
                    const balance = totalPaid_ - totalCredit;
                    const totalPaid = totalCredit;
                    await context.paymentService.create({ customerId, seasonId, amount, date });
                    await context.customerSummaryService.update(id, { customerId, seasonId, totalPaid, totalCredit });
                    cascade(context, balance);
                } else {
                    const totalPaid = Number(total_paid) + Number(balanceAmount);
                    await context.paymentService.create({ customerId, seasonId, amount, date });
                    await context.customerSummaryService.update(id, { customerId, seasonId, totalPaid, totalCredit });
                }

            })(this, amount);
        } else {
            // The override
            const currentCustomerSummaries = await this.customerSummaryService.getByCustomerAndSeason(customerId, seasonId);
            const { id, total_paid, total_credit } = currentCustomerSummaries[0];
            const totalPaid = Number(total_paid) + Number(amount);
            const totalCredit = Number(total_credit);
            await this.customerSummaryService.update(id, { customerId, seasonId, totalPaid, totalCredit });
            await this.paymentService.create({ customerId, seasonId, amount, date });
        }
        return res.status(CREATED).json({
            status: 'success',
            message: 'Payment made successfully!'
        });

    };

    findAll = async (req: Request, res: Response) => {
        const payments = await this.paymentService.findAll();
        return res.status(OK).json({
            status: 'success',
            data: payments
        });
    };

    findByCustomerId = async (req: Request, res: Response) => {
        const { customerId } = req.params;
        const payments = await this.paymentService.findByCustomerId(Number(customerId));
        return res.status(OK).json({
            status: 'success',
            data: payments
        });
    };

    findBySeasonId = async (req: Request, res: Response) => {
        const { seasonId } = req.params;
        const payments = await this.paymentService.findBySeasonId(Number(seasonId));
        return res.status(OK).json({
            status: 'success',
            data: payments
        })
    }
}
