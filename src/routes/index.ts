import { IRoute } from '../interfaces/route.interface';

import { PaymentRoute } from './paymentRoute';

import { PaymentController } from '../controllers';

import { PaymentService } from '../database/services/Payment';
import { CustomerSummaryService } from '../database/services/CustomerSummary';

const paymentRoute = new PaymentRoute(new PaymentController(new PaymentService(), new CustomerSummaryService()));

export const routes: IRoute[] = [
    paymentRoute,
];
