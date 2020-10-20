//import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

const cookbookSchema = new Schema (
    {
        title: String,
        year: Number
    }
)

const Cookbook = mongoose.model('cookbook', cookbookSchema)
module.exports = Cookbook

//export model
