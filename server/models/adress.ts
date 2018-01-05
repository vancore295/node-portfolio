import * as mongoose from 'mongoose';

const addressSchema = new mongoose.Shcema({
    Country: String,
    State: String,
    Citry: String,
    Street: String,
    Zip: Number,
});

const Address = mongoose.model('Address', addressSchema);

export default Address;
