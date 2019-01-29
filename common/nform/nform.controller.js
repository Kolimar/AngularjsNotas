class NformController {
  constructor(notasService) {
    'ngInject'
    this.notasService = notasService;
  }
  
  $onInit(){
  }

  guardarNota(){
    
      this.notasService.crear(this.noteForm).then((res)=>{
        this.onSave();
      }
     );
  }

  $onChanges(){
    console.log('changes');
  }

  formValid(){
    return (!this.noteForm.title || !this.noteForm.content);
  }

}

export default NformController;