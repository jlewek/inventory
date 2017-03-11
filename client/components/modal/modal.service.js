'use strict';

import angular from 'angular';

export function Modal($rootScope, $uibModal) {
   'ngInject';
  /**
   * Opens a modal
   * @param  {Object} scope      - an object to be merged with modal's scope
   * @param  {String} modalClass - (optional) class(es) to be applied to the modal
   * @return {Object}            - the instance $uibModal.open() returns
   */
  function openModal(scope = {}, modalClass = 'modal-default') {
    var modalScope = $rootScope.$new();

    angular.extend(modalScope, scope);

    return $uibModal.open({
      template: require('./modal.html'),
      windowClass: modalClass,
      scope: modalScope
    });
  }

  // Public API here
  return {

    /* Confirmation modals */
    confirm: {

      /**
       * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
       * @param  {Function} del - callback, ran when delete is confirmed
       * @return {Function}     - the function to open the modal (ex. myModalFn)
       */
      delete(del = angular.noop) {
        /**
         * Open a delete confirmation modal
         * @param  {String} name   - name or info to show on modal
         * @param  {All}           - any additional args are passed straight to del callback
         */
        return function() {
          var args = Array.prototype.slice.call(arguments);
          var name = args.shift();
          var deleteModal;

          deleteModal = openModal({
            modal: {
              dismissable: true,
              title: 'Confirm Delete',
              html: `<p>Are you sure you want to delete <strong>${name}</strong> ?</p>`,
              buttons: [{
                classes: 'btn-danger',
                text: 'Delete',
                click(e) {
                  deleteModal.close(e);
                }
              }, {
                classes: 'btn-default',
                text: 'Cancel',
                click(e) {
                  deleteModal.dismiss(e);
                }
              }]
            }
          }, 'modal-danger');

          deleteModal.result.then(function(event) {
            del.apply(event, args);
          });
        };
      },
      addItem(del = angular.noop) {

        return function(accept, dismiss) {
          var args = Array.prototype.slice.call(arguments);
          var name = args.shift();
          var deleteModal;

          deleteModal = openModal({
            modal: {
              dismissable: true,
              title: 'Dodaj przedmiot',
              html: `<div class="form-group label-static">
                        <label for="i2" class="control-label">Nazwa</label>
                        <input type="text" name="name" class="form-control" model="vm.itemToAdd.name" id="i2" placeholder="nazwa">
                    </div>`,
              buttons: [{
                classes: 'btn-info',
                text: 'Dodaj',
                click(e) {
                  accept = accept || function () {};
                  deleteModal.close(e);
                }
              }, {
                classes: 'btn-default',
                text: 'Anuluj',
                click(e) {
                  dismiss = dismiss || function () {};
                  deleteModal.dismiss(e);
                }
              }]
            }
          }, 'modal-info');

          deleteModal.result.then(function(event) {
            del.apply(event, args);
          });
        };
      }
    }
  };
}

export default angular.module('learningcurveApp.Modal', [])
  .factory('Modal', Modal)
  .name;
