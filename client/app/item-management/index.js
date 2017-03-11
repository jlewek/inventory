/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ImController from './im.controller';
import InventoryModel from './im.service';
import routes from './im.routes';

export default angular.module('learningcurveApp.itemmanagement', [uiRouter])
  .controller('ImController', ImController)
  .service('InventoryModel', InventoryModel)
  .config(routes)
  .name;
