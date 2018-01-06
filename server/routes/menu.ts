import * as express from 'express';

import MenuItemCtrl from '../controllers/MenuItem';

export default function setMenuRoutes(app) {
    const router = express.Router();

    const menuCtrl = new MenuItemCtrl();
    // Menu items
    router.route('/menuitems').get(menuCtrl.getAll);

    app.use('/api', router);
}
