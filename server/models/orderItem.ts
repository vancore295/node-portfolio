import * as mongoose from 'mongoose';

const ObjectId = mongoose.ObjectId;

const orderItemSchema = new mongoose.Schema({
    shopItemId: ObjectId,
    size: String
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

export default OrderItem;
