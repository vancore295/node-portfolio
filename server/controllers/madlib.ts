import BaseCtrl from './_abstracts/base';
import MadLib from '../models/madlib';

export default class MadlibCOntroller extends BaseCtrl {
    constructor() {
        super();
    }
    model = MadLib;

    findByName = function(req, res) {
        const query = req.query;

        MadLib.findOne(query, function (err, obj) {
            if (err) {
                return res.json(err);
            } else {
                return res.json(obj);
            }
        });
    };
}
