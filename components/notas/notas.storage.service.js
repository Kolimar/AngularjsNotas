class notasStorageService {

  constructor() {
    this.dataStore = new Map();
  }

  guardarNota(key, datos) {
    return this.dataStore.set( key, datos);
  }

  recuperarNota(key) {
    return this.dataStore.get(key);
  }

  limpiarStorage() {
    return this.dataStore.clear();
  }

}

export default notasStorageService;