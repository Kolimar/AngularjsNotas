import angular from 'angular';
import uiRouter from 'angular-ui-router';
import notasComponent from './notas.component';
import notasStorageService from './notas.storage.service';

let notasModule = angular.module('notas', [
  uiRouter
])

.service('notasStorageService', notasStorageService)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('notas', {
      url: '/notas',
      component: 'notas'
    });
})

.component('notas', notasComponent)
  
.name;

export default notasModule;
