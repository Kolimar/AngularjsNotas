import angular from 'angular';
import notasService from './notas.service';
/**
 * Modulo que contiene todos los servicios de llama al backend endpoint
 */
const endpointModule = angular.module('endpoint.services', [])
    /* endpoint services */
    .service('notasService', notasService)
.name;

export default endpointModule;