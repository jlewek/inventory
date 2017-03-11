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
    this.items = [];

    this.addItem = this.modal.addItem();

    this.InventoryModel.getAll().then((data) => {
      var docs = data.data;
      if (angular.isArray(docs)) {
        this.items = docs;
      } else {
        this.Debuger.log(true, 'ImController: docs are not array');
      }
    }, () => {
      console.log('ImController: failed to fetched.');
    });
  }

  delete(index) {
    console.log("deleting item at index",index);
    this.InventoryModel.removeItemById(this.items[index]);
    this.items = this.items.splice(1, index);
  }
}
