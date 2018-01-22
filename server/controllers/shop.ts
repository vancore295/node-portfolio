import ShopItem from '../models/shopitem';
import BaseCtrl from './_abstracts/base';

export default class ShopItemCtrl extends BaseCtrl {
    model = ShopItem;

    findByType = (req, res) => {
        this.model.findOne({ type: req.params.type }, (err, obj) => {
            if (err) {
                return console.error(err);
            } else {
                res.json(obj);
            }
        });
    }

}
