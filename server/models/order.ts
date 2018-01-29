import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.ObjectId;

const OrderItem = new mongoose.Schema({
    shopItemId: ObjectId,
    size: String
});

const Address = new mongoose.Schema({
    Country: String,
    State: String,
    City: String,
    Street: String,
    Zip: Number,
});

const Recipient = new mongoose.Schema({
    Name: String,
    Email: String
});

const orderShecma = new mongoose.Schema({
    orderNumber: Number,
    adress: { type: Address },
    recipient: { type: Recipient },
    items: { type: [OrderItem] }
});

const Order = mongoose.model('Order', orderShecma);

export default Order;
