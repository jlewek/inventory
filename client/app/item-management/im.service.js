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
        return new Promise(function (resolve, reject) {
            $http.post('/api/inventory/search', _opts).then(function (data) {
                resolve(data || data.data || []);
            });
        }, reject);
    }

    function removeItemById (id) {
        debug(!id, 'removeItemById: No id specified.');        
        return new Promise(function (resolve, reject) {
            $http.delete('/api/inventory/'+ id).then(function (data) {
                resolve(data || data.data || []);
            });
        });
    }

    function search (query) {
        debug(!query, 'search: No query specified.');        
        return new Promise(function (resolve, reject) {
            $http.post('/api/inventory/search', { query: query }).then(function (data) {
                resolve(data || data.data || []);
            });
        }); 
    }
    
    function create (doc) {
        debug(!doc, 'create: No doc specified.');        
        return new Promise(function (resolve, reject) {
            $http.post('/api/inventory', { doc: doc }).then(function (data) {
                resolve(data || data.data || []);
            });
        }); 
    }

    function debug (fire, msg) {
        if (fire) {
            console.log('Inventory Model service: '+ msg);
        }
    }   
}