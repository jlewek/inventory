import angular from 'angular';
import InventoryModel from '../item-management/im.service';

export default function ItemList () {
    return {
      controller: ['$scope', 'InventoryModel',  function ($scope, InventoryModel) {

        InventoryModel.getAll().then(function(itemData){
          $scope.itemData = itemData;
        });
      }],
      template: require( './mainItemList.html')
    }
};
