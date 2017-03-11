/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('item', {
    url: '/item/:id',
    template: require('./itemview.html'),
    controller: 'ItemViewController',
    controllerAs: 'vm',
    authenticate: ['admin', 'mod']
  });
}
