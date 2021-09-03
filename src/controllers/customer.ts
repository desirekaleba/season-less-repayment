import { Request, Response } from 'express';
import { CreateCustomerDto } from '../dtos/createCustomer';
import { CustomerService } from '../database/services/Customer';
import { CREATED, OK } from '../constants/statusCodes';

export class CustomerController {
    constructor(
        private customerService: CustomerService
    ) { }

    createCustomer = async (req: Request, res: Response) => {
        const { customerName }: CreateCustomerDto = req.body;
        const customer = await this.customerService.create({ customerName });
        res.status(CREATED).json({
            status: 'success',
            message: 'Customer created successfully',
            data: customer
        });
    };

    getAll = async (req: Request, res: Response) => {
        const customers = await this.customerService.getAll();
        res.status(OK).json({
            status: 'success',
            data: customers
        });
    };

    getById = async (req: Request, res: Response) => {
        const { customerId } = req.params;
        const customer = await this.customerService.getById(Number(customerId));
        console.log(customer);
        return res.status(OK).json({
            status: 'success',
            data: customer
        });
    };

    getByName = async (req: Request, res: Response) => {
        const { customerName } = req.body;
        const customers = await this.customerService.getByName(customerName);
        res.status(OK).json({
            status: 'success',
            data: customers
        });
    };
}

