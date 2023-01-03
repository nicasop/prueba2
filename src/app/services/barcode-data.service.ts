import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class BarcodeDataService {

  historial: Registro[] = [];

  constructor() { }

  async cargarDatos(){
  }

  guardarRegistro( data: string ){
  }
}
