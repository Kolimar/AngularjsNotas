/**
 * Interceptor encargado de insertar el context path de cada request
 */
const contextPathHttpInterceptor = ($window) => {
  'ngInject';
  const contextPathHttp = {
    request: (config) => {
      const contextPath = 'https://quadminds-notes-test.getsandbox.com';
      config.url = `${contextPath}${config.url}`;
      return config;
    }
  };
  return contextPathHttp;
};

export default contextPathHttpInterceptor;