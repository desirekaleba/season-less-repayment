import { getConnection } from 'typeorm';
import { CreatePaymentDto } from '../../dtos/createPayment';
import { Payment } from '../entities/Payment';

export class PaymentService {
    create = async (paymentData: CreatePaymentDto) => {
        return await Payment.create(paymentData).save();
    };
}
