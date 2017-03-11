/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
'use strict';

import angular from 'angular';
import routes from './itemview.routes';
import ItemViewController from './itemview.controller';

export default angular.module('learningcurveApp.item', ['learningcurveApp.auth', 'ui.router'])
  .config(routes)
  .controller('ItemViewController', ItemViewController)
  .name;
