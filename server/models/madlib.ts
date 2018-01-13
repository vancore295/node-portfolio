import * as mongoose from 'mongoose';

const madlibSchema = new mongoose.Schema({

});

const Madlib = mongoose.model('Madlib', madlibSchema);

export default Madlib;
