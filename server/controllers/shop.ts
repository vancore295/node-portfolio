import ShopItem from '../models/shopitem';
import BaseCtrl from './base';

export default class ShopItemCtrl extends BaseCtrl {
    model = ShopItem;

    findByType = (req, res) => {
        this.model.findOne({ type: req.params.type }, (err, obj) => {
            if (err) { return console.error(err); }
            res.json(obj);
        });
    }

}
