import angular from 'angular';
import errorHttpResponseInterceptor from './error-http-response';
import contextPathHttpInterceptor from './context-path-http';

/**
 * Modulo que contiene todos interceptores de los request http
 */
const interceptorsModule = angular.module('notas.interceptors', [])

  // Definición de Interceptors
  .factory('contextPathHttpInterceptor', contextPathHttpInterceptor)
  .factory('errorHttpResponseInterceptor', errorHttpResponseInterceptor)
  // inserto los interceptors en angular
  .config($httpProvider => {
    'ngInject';
    $httpProvider.interceptors.push('contextPathHttpInterceptor');
    $httpProvider.interceptors.push('errorHttpResponseInterceptor');
  })
  .name;

export default interceptorsModule;