'use strict';

export default function InventoryModel($http, $q) {
     'ngInject';

    return {
        getItemById: getItemById,
        getAll: getAll,
        removeItemById: removeItemById,
        search: search,
        create: create,
    };

    function getItemById (id) {
        debug(!id, 'getItemById: No id specified.');
        return $http.get('/api/inventory/'+ id)
    }

    function getAll (opts) {
        var _opts = Object.assign({ all: true, toSell: false }, opts || {});
        return $http.post('/api/inventory/', _opts)
    }

    function removeItemById (id) {
        debug(!id, 'removeItemById: No id specified.');        
        return $http.delete('/api/inventory/'+ id)
    }

    function search (query) {
        debug(!query, 'search: No query specified.');        
        return $http.post('/api/inventory/search', { query: query })
    }
    
    function create (doc) {
        debug(!doc, 'create: No doc specified.');        
        return $http.post('/api/inventory/search', { doc: doc })
    }

    function debug (fire, msg) {
        if (fire) {
            console.log('Inventory Model service: '+ msg);
        }
    }   
}