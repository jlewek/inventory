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
    this.Modal = Modal;
    this.Debuger = Debuger;
  }

  $onInit() {
    this.items = [];

    this.InventoryModel.getAll().then((docs) => {
      if (angular.isArray(docs)) {
        this.items = docs;
      } else {
        this.Debuger.log();
      }
    }, () => {
      console.log('f');
    });
  }
}
