import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonasViewModel {
  elemento: any;
  modoAdd = true;

  load() {
    this.modoAdd = false;
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '12345678z', email: 'pepito@grillo' }
  }
  add() {
    this.modoAdd = true;
    this.elemento = {}
  }
  send() {
    window.alert((this.modoAdd ? 'POST: ' : 'PUT: ') + JSON.stringify(this.elemento))
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(public VM: PersonasViewModel) {
    VM.add()
  }
}
