'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const materializedPlugin = require('mongoose-materialized');
// var MpathPlugin = require('mongoose-mpath');

const ListSchema = new mongoose.Schema({
  id:{
    type:String,
    default:'',
    unique: true
  },
  name: {
    type:String,
    default:''
  }
});
ListSchema.plugin(materializedPlugin);
  

mongoose.model('listModel', ListSchema);