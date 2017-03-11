/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
'use strict';

export default class ImController {
  /*@ngInject*/
  constructor($http, InventoryModel, Modal, Debuger) {
    this.$http = $http;
    this.InventoryModel = InventoryModel;
    this.modal = Modal.confirm;
    this.Debuger = Debuger;
  }

  $onInit() {
    var self = this;
    this.itemToAdd = {};

    this.InventoryModel.getAll().then(function(items) {
      console.log(items);
      self.items = items;
    });
  }
  addItem() {
    this.modal.addItem()(() => {
      
    });
  }
  delete(index) {
    console.log('deleting item at index', index);
    this.InventoryModel.removeItemById(index).then(function(info){
      console.log(info);
    });
    this.items = this.items.splice(1, index);
  }
}
