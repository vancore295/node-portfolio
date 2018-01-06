import Order from '../models/order';
import BaseCtrl from './_abstracts/base';

export default class OrderController extends BaseCtrl {
    model = Order;
}
