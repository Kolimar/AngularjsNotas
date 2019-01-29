/**
 * Interceptor encargado del manejo de errores en los requests
 */
const errorHttpResponseInterceptor = ($q, $injector) => {
  'ngInject';
  const errorHttpResponse = {
    responseError: (rejection) => {
      //if el error es x lanzar determinado modal o acción
      console.log('error interceptado');  
       console.log(rejection);    
      return $q.reject(rejection);
    }
  };
  return errorHttpResponse;
};

export default errorHttpResponseInterceptor;
