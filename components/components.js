import angular from 'angular';
import Home from './home/home';
import Notas from './notas/notas';

let componentModule = angular.module('app.components', [
	Home,
  Notas
])
.name;

export default componentModule;
