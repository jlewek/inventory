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
        return new Promise(function (resolve, reject) {
            $http.get('/api/inventory/'+ id).then(function (data) {
                resolve(data && data.data || []);
            }, reject);
        });
    }

    function getAll (opts) {
        return new Promise(function (resolve, reject) {
            $http.get('/api/inventory').then(function (data) {
                resolve(data && data.data || []);
            }, reject);
        });
    }

    function removeItemById (id) {
        debug(!id, 'removeItemById: No id specified.');        
        return new Promise(function (resolve, reject) {
            $http.delete('/api/inventory/'+ id).then(function (data) {
                resolve(data && data.data || []);
            }, reject);
        });
    }

    function search (query) {
        debug(!query, 'search: No query specified.');        
        return new Promise(function (resolve, reject) {
            $http.post('/api/inventory/search', { query: query }).then(function (data) {
                resolve(data && data.data || []);
            }, reject);
        }); 
    }
    
    function create (doc) {
        debug(!doc, 'create: No doc specified.');        
        return new Promise(function (resolve, reject) {
            console.log('connecting...');
            $http.post('/api/inventory', { doc: doc }).then(function (data) {
                console.log('connected');
                resolve(data && data.data || []);
            }, reject);
        }); 
    }

    function debug (fire, msg) {
        if (fire) {
            console.log('Inventory Model service: '+ msg);
        }
    }   
}