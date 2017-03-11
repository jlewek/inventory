'use strict';

import mongoose from 'mongoose';

var InventoryItem = new mongoose.Schema({
  name: String,
  description: String,
  price: {
      buy: Number,
      actual: Number,
      sell: Number
  },
  inUse: Boolean,
  broken: Boolean,
  documents: [
      { name: String, type: String, content: Buffer }
  ],
  created: Date,
  removed: Date,
  canBeRemoved: Boolean,
  img: [
      { name: String, type: String, content: Buffer }
  ],
  room: String
});

InventoryItem.methods.getItemById = function (body, callback) {
    
    return this.findById(id);
}

module.exports = mongoose.model('InventoryItem', InventoryItem);
