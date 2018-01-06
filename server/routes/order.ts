import * as express from 'express';

import OrderController from '../controllers/Order';

export default function setOrderRoutes(app) {
    const router = express.Router();

    const orderCtrl = new OrderController();

    router.route('/placeOrder').post(orderCtrl.insert);

    app.use('/api', router);
}

