/**
 * TCD Software
 * Created by Dmitrij Rysanow on 11.03.17.
 */
'use strict';

export function ItemResource($resource) {
  'ngInject';

  return $resource('/api/items/:id/:controller', {
    id: '@_id'
  }, {
    get: {
      method: 'GET'
    }
  });
}
