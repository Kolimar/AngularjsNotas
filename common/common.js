import angular from 'angular';
import Navbar from './navbar/navbar';
import Nform from './nform/nform';
import Nsidebar from './nsidebar/nsidebar';

let commonModule = angular.module('app.common', [
  Navbar,
  Nform,
  Nsidebar
]) 
.name;

export default commonModule;
