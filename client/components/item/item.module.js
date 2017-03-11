/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
import {ItemResource} from './item.resource';
import angular from 'angular';

export default angular.module('learningcurveApp.item', [])
  .factory('Item', ItemResource)
  .name;
