import * as mongoose from 'mongoose';

const shopitemSchema = new mongoose.Schema({
    type: String,
    title: String,
    imageMain: String,
    imageAlt: String,
    price: Number,
    sizes: [String]
});

const ShopItem = mongoose.model('Shopitem', shopitemSchema);

export default ShopItem;
