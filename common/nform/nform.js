import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nformComponent from './nform.component';

let nformModule = angular.module('nform', [
  uiRouter
])

.component('nform', nformComponent)
  
.name;

export default nformModule;