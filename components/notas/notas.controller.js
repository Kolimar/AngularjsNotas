class NotasController {
  constructor(notasService, notasStorageService, $mdDialog) {
    'ngInject';
    this.notasService = notasService;
    this.notasStorageService = notasStorageService;
    this.mdDialog = $mdDialog;
  }

  $onInit(){
    this.listar();
  }

  mostrarNota(ev, nota){
    nota ? null:nota = {title:'',content:''};
    this.alerta(ev, nota.title,nota.content);
  }
  
  editarNota(ev,nota){
    this.loading = true;
    let confirm = this.mdDialog.prompt()
      .title(nota.title)
      .textContent('Contenido:')
      .placeholder('Contenido')
      .initialValue(nota.content)
      .targetEvent(ev)
      .required(true)
      .ok('Editar!')
      .cancel('Cancelar');

    this.mdDialog.show(confirm).then((result)=> {
       nota.content = result;
       this.notasService.editar(nota.id, nota).then((res)=>{
          this.loading = false;
          console.log('nota editada');
          this.listar();
          this.alerta(ev,'Nota Editada','La nota se editó con éxito');
        });
    },()=>{
      this.loading = false;
    });
  
  }

  borrarNota(ev, nota){
    if (!nota){
      //Ésto está acá al igual que el if al listar porque la bd hubo casos donde devolvía espacios null en el array
      // y necesitaba condicionar ese tipo especial de error de una manera simple sin crear validaciones en el interceptor.
      console.log('error, nota no definida');
      return;
    }
    this.loading = true;
    this.notasService.borrar(nota.id).then((res)=>{
      this.listar();
      this.alerta(ev, 'Nota Eliminada','La nota se eliminó con éxito');
      this.loading = false;
    });
  }

  listar(){
    this.notasService.listar().then((res)=>{
       this.notas = res.data;
       //Si existen notas las almaceno en memoria para usarlas en otras secciones.(para cuando quiera extender el código) 
       this.notas.length ? 
        this.notas.map((nota)=>{
          if (nota){
              this.notasStorageService.guardarNota(nota.id, nota);
          }
         }): null;
    });
  }
  
  //por cuestiones de tiempo no lo separo en un componente externo
  //pero las alertas deberían ir fuera del componente notas, asi como varias funcionalidades.
  alerta(ev,title,textContent){
    this.mdDialog.show(
            this.mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title(title)
              .textContent(textContent)
              .ariaLabel(title)
              .ok('Volver')
              .targetEvent(ev)
          );
  }

}

export default NotasController;
