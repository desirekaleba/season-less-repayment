import { getConnection } from 'typeorm';
import { CreatePaymentDto } from '../../dtos/createPayment';
import { Payment } from '../entities/Payment';
import { findAll, findByCustomerId, findBySeasonId } from '../queries/Payment';

export class PaymentService {
    create = async (paymentData: CreatePaymentDto) => {
        return await Payment.create(paymentData).save();
    };

    findAll = async () => {
        const payments = await getConnection().manager.query(
            findAll(),
        );
        return payments;
    };

    findByCustomerId = async (customerId: number) => {
        const payments = await getConnection().manager.query(
            findByCustomerId(customerId),
        );
        return payments;
    };

    findBySeasonId = async (seasonId: number) => {
        const payments = await getConnection().manager.query(
            findBySeasonId(seasonId)
        );
        return payments;
    }
}
