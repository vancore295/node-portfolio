import * as mongoose from 'mongoose';

const madlibSchema = new mongoose.Schema({
    creator: String,
    madlib: String,
    data: Object
});

const Madlib = mongoose.model('Madlib', madlibSchema);

export default Madlib;
