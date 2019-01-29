import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import Common from './common/common';
import Components from './components/components';
import endpoint from './common/endpoints';
import interceptors from './common/interceptors';

import 'normalize.css';

import 'angular-material/angular-material.css';

angular.module('app', [
    uiRouter,
    Components,
    Common,
    ngMaterial,
    endpoint,
    interceptors
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
