class NsidebarController {
  /**
   * Inyeccion de dependencias
   */
  constructor($mdSidenav) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
  }

  $onInit() {
  }

  toggleRight() {
    this.mdSidenav('right')
      .toggle()
      .then(function () {
      });
  }


  close() {    
    this.onSave();
    this.mdSidenav('right')
      .close()
      .then(function () {
      });
  }
}

export default NsidebarController;
