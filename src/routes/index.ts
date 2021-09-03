import { IRoute } from '../interfaces/route.interface';

import { PaymentRoute } from './paymentRoute';
import { CustomerSummaryRoute } from './summaryRoute';
import { CustomerRoute } from './Customer';

import { PaymentController, CustomerSummaryController, CustomerController } from '../controllers';

import { PaymentService } from '../database/services/Payment';
import { CustomerSummaryService } from '../database/services/CustomerSummary';
import { CustomerService } from '../database/services/Customer';

const paymentRoute = new PaymentRoute(new PaymentController(new PaymentService(), new CustomerSummaryService()));
const customerSummaryRoute = new CustomerSummaryRoute(new CustomerSummaryController(new CustomerSummaryService()));
const customerRoute = new CustomerRoute(new CustomerController(new CustomerService()));

export const routes: IRoute[] = [
    paymentRoute,
    customerSummaryRoute,
    customerRoute
];
