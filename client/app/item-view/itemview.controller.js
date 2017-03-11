/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
export default class ItemViewController {
  /*@ngInject*/
  constructor($http, $stateParams, InventoryModel) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.InventoryModel = InventoryModel;
    this.notFound = false;
    this.loading = true;
  }

  $onInit() {
    let id = this.$stateParams.id;
    this.InventoryModel.getItemById(id).then((item) => {
      this.item = item;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.notFound = true;
    });
  }
}
