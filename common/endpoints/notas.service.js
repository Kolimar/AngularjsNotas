class notasService {
// class notasService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  listar(){
    const url = '/notes';
    const resource = this.$http.get(url)
      .then(result => result.data);
    return resource;
  }
  
  obtenerPorId(id){
    const url = `/notes/${id}`;
    const resource = this.$http.get(url)
      .then(result => result.data);
    return resource;
  }

  crear(request){
   const url = '/notes';
    const resource = this.$http.post(url, request)
      .then(result => result.data);
    return resource;
  }

  editar(id,request){
     const url = `/notes/${id}`;
    const resource = this.$http.patch(url,request)
      .then(result => result.data);
    return resource;
  
  }

  borrar(id){
    const url = `/notes/${id}`;
    const resource = this.$http.delete(url)
      .then(result => result.data);
    return resource;
  
  }
}

export default notasService;