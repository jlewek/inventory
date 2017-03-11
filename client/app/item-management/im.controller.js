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
    this.itemToAdd = {};

    this.InventoryModel.getAll().then((data) => {
      if (angular.isArray(data)) {
        this.items = data;
      } else {
        this.Debuger.log(true, 'ImController: docs are not array');
      }
    }, () => {
      console.log('ImController: failed to fetched.');
    });
  }
  addItem() {
    this.modal.addItem()(() => {
      
    });
  }
  delete(index) {
    console.log('deleting item at index', index);
    this.InventoryModel.removeItemById(this.items[index]);
    this.items = this.items.splice(1, index);
  }
}
