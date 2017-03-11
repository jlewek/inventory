/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
'use strict';

export default class ImController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.items = [
       {
         name: 'Komp',
         price: 2000,
         sellprice: 1000,
         corrupted: false,
         inUse: true,
         docs: [],
         created: Date.now(),
         removed: false,
         _canBeRemoved: true,
         user: 1
       }
   ];
  }
}
