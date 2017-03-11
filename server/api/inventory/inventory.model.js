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
  _canBeRemoved: Boolean,
  img: [
      { name: String, type: String, content: Buffer }
  ],
  room: String,
  user: String
});

InventoryItem.methods.getItemById = function (body, callback) {
    return this.findById(id);
}

InventoryItem.methods.create = function (body) {
    var newItem = new InventoryItem(Object.assign({}, body.doc));
    newItem.created = new Date();
    return newItem.save();
}

InventoryItem.methods.removeItem = function (body) {
    var id = body.id;
    return new Promise(function (resolve, reject) {
        this.findById(id).then(function (doc) {
            resolve();
            doc.remove();
        }).catch(reject);
    });
}

module.exports = mongoose.model('InventoryItem', InventoryItem);
