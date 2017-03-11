'use strict';

import mongoose from 'mongoose';

var InventoryItem = new mongoose.Schema({
  name: String,
  description: String,
  price: {
      buy: Float,
      actual: Float,
      sell: Float
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

export default mongoose.model('Thing', InventoryItem);
