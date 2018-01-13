import * as express from 'express';

import MadlibCOntroller from '../controllers/madlib';

export default function setMadlibRoutes(app) {
    const router = express.Router();

    const madLbCtrl = new MadlibCOntroller();

    router.route('/madlibs').get(madLbCtrl.getAll);
    router.route('madlibs').post(madLbCtrl.insert);

    app.use('/api', router);
}
