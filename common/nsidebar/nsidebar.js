import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nsidebarComponent from './nsidebar.component';

const nsidebar = angular
  .module('nsidebar', [
    uiRouter
  ])
  .component('nsidebar', nsidebarComponent)
  .name;

export default nsidebar;
