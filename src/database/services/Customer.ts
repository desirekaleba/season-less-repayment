import { getConnection } from 'typeorm';
import { CreateCustomerDto } from '../../dtos/createCustomer';
import { Customer } from '../entities/Customer';
import { findAll, findById, findByName } from '../queries/Customer';

export class CustomerService {
    create = async (customerInput: CreateCustomerDto) => {
        return await Customer.create(customerInput).save();
    };

    getAll = async () => {
        const customers = await getConnection().manager.query(
            findAll(),
        );
        return customers;
    };

    getById = async (customerId: number) => {
        const customer = await getConnection().manager.query(
            findById(customerId),
        );
        return customer;
    };

    getByName = async (customerName: string) => {
        const customers = await getConnection().manager.query(
            findByName(customerName),
        );
        return customers;
    };
}
