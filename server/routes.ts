import * as express from 'express';

import MenuItemCtrl from './controllers/MenuItem';
import MenuItem from './models/menuitem';

export default function setRoutes(app) {
    const router = express.Router();

    const menuCtrl = new MenuItemCtrl();

    // Menu items
    router.route('/menuitems').get(menuCtrl.getAll);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
