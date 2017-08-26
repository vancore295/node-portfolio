import * as mongoose from 'mongoose';

const menuitemSchema = new mongoose.Schema({
    route: String,
    href: String,
    target: String,
    linkLabel: String,
    imageSource: String,
    dataToggle: String,
    dataPlacement: String,
    title: String,
    showImage: Boolean,
    showLabel: Boolean
});

const MenuItem = mongoose.model('MenuItem', menuitemSchema);

export default MenuItem;
