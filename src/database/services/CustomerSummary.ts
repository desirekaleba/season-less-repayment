import { getConnection } from 'typeorm';
import { CreateCustomerSummaryDto } from '../../dtos/createCustomerSummary';
import { CustomerSummary } from '../entities/CustomerSummary';
import { findAll, _findByCustomer, findByCustomerAndSeason, findBySeason } from '../queries/CustomerService';

export class CustomerSummaryService {
    create = async (customerSummaryInput: CreateCustomerSummaryDto) => {
        return await CustomerSummary.create(customerSummaryInput).save();
    };

    getAll = async () => {
        const customerSummaries = await getConnection().manager.query(
            findAll(),
        );
        return customerSummaries;
    };

    getByCustomerAndSeason = async (customerId: number, seasonId: number) => {
        const customerSummary = await getConnection().manager.query(findByCustomerAndSeason(customerId, seasonId));
        return customerSummary;
    };

    getByCustomer = async (customerId: number) => {
        const customerSummaries = await getConnection().manager.query(
            _findByCustomer(customerId),
        );
        return customerSummaries;
    };

    getBySeason = async (seasonId: number) => {
        const customerSummaries = await getConnection().manager.query(
            findBySeason(seasonId),
        );
        return customerSummaries;
    };
    update = async (id: number, data: CreateCustomerSummaryDto) => {
        const customerSummary = await CustomerSummary.findOne(id);
        if (customerSummary) {
            await CustomerSummary.update(id, data);
            return await CustomerSummary.findOne(id);
        }
        return null;
    }
}
