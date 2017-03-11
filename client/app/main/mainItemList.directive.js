import angular from 'angular';
import InventoryModel from '../item-management/im.service';

export default function ItemList () {
    return {
      controller: ['$scope', 'InventoryModel',  function ($scope, InventoryModel) {
        //TODO: get data from service and remove mock
        /*InventoryModel.getAll().then(function(itemData){
            $scope.itemData = itemData;
        });*/
        InventoryModel.getAll().then(function(itemData){
            console.log(itemData);
        });
        // data mock
        var itemData = [];
        for(var i=0;i<20;i++) {
          itemData.push({
            _id: i,
            name: 'Test',
            description: 'test abc',
            price: {
                buy: 43,
                actual: 11,
                sell: 43
            },
            inUse: true,
            broken: true,
            documents: [],
            created: Date.now(),
            _canBeRemoved: true,
            img: [],
            room: '12',
            name: 'Test',
            description: 'test abc',
            price: {
                buy: 43,
                actual: 11,
                sell: 43
            },
            inUse: true,
            broken: true,
            documents: [],
            created: Date.now(),
            _canBeRemoved: true,
            img: [],
            room: '12'
          });
        }
        $scope.itemData = itemData;
      }],
      template: require( './mainItemList.html')
    }
};
