import { IRoute } from '../interfaces/route.interface';

import { PaymentRoute } from './paymentRoute';
import { CustomerSummaryRoute } from './summaryRoute';
import { CustomerRoute } from './Customer';
import { SeasonRoute } from './Season';

import {
    PaymentController,
    CustomerSummaryController,
    CustomerController,
    SeasonController
} from '../controllers';

import { PaymentService } from '../database/services/Payment';
import { CustomerSummaryService } from '../database/services/CustomerSummary';
import { CustomerService } from '../database/services/Customer';
import { SeasonService } from '../database/services/Season';

const paymentRoute = new PaymentRoute(new PaymentController(new PaymentService(), new CustomerSummaryService()));
const customerSummaryRoute = new CustomerSummaryRoute(new CustomerSummaryController(new CustomerSummaryService()));
const customerRoute = new CustomerRoute(new CustomerController(new CustomerService()));
const seasonRoute = new SeasonRoute(new SeasonController(new SeasonService()));

export const routes: IRoute[] = [
    paymentRoute,
    customerSummaryRoute,
    customerRoute,
    seasonRoute
];
