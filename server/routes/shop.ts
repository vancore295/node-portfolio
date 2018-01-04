import * as express from 'express';

import ShopItemCtrl from '../controllers/shop';
import ShopItem from '../models/shopitem';

export default function setShopRoutes(app) {
    const router = express.Router();

    const shopCtrl = new ShopItemCtrl();

    // shop items
    router.route('/shopitems').get(shopCtrl.getAll);
    router.route('/shopitemsbytype/:type').get(shopCtrl.findByType);

    app.use('/api', router);
}
