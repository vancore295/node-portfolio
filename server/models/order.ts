import * as mongoose from 'mongoose';
import * as Address from './adress';
import * as OrderItem from './orderItem';

const orderShecma = new mongoose.Schema({
    orderNumber: Number,
    adress: Address,
    itesm: [OrderItem]
});

const Order = mongoose.model('Order', orderShecma);

export default Order;
