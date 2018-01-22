import * as mongoose from 'mongoose';

const madlibSchema = new mongoose.Schema({
    creator: String,
    madlib: String,
    data: Object
});

const MadLib = mongoose.model('MadLib', madlibSchema);

export default MadLib;
