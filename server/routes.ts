import * as express from 'express';

import MenuItemCtrl from './controllers/MenuItem';
import MenuItem from './models/menuitem';

import ShopItemCtrl from './controllers/shop';
import ShopItem from './models/shopitem';

export default function setRoutes(app) {
    const router = express.Router();

    const menuCtrl = new MenuItemCtrl();
    const shopCtrl = new ShopItemCtrl();

    // Menu items
    router.route('/menuitems').get(menuCtrl.getAll);

    // shop items
    router.route('/shopitems').get(shopCtrl.getAll);
    router.route('/shopitemsbytype/:type').get(shopCtrl.findByType);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
