/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('im', {
    url: '/item-management',
    template: require('./im.html'),
    controller: 'ImController',
    controllerAs: 'vm',
    authenticate: ['admin', 'mod']
  });
}
