import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';

@Injectable({ providedIn: 'root' })
export class PersonasViewModel {
  elemento: any;
  modoAdd = true;

  constructor(private http: HttpClient, private notify: NotificationService) { }

  load() {
    this.http.get(`http://localhost:4321/api/personas/${this.elemento.id}`).subscribe({
      next: data => {
        this.modoAdd = false;
        this.elemento = data
      },
      error: err => this.notify.add(JSON.stringify(err))
    })
    // this.modoAdd = false;
    // this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '12345678z', correo: 'pepito@grillo' }

  }
  add() {
    this.modoAdd = true;
    this.elemento = {}
  }
  send() {
    if(this.modoAdd) {
      this.http.post(`http://localhost:4321/api/personas`, this.elemento).subscribe({
        next: () => this.notify.add('OK', NotificationType.info),
        error: err => this.notify.add(JSON.stringify(err))
      })
    } else {
      this.http.put(`http://localhost:4321/api/personas/${this.elemento.id}`, this.elemento).subscribe({
        next: () => this.notify.add('OK', NotificationType.info),
        error: err => this.notify.add(JSON.stringify(err))
      })
    }
    // window.alert((this.modoAdd ? 'POST: ' : 'PUT: ') + JSON.stringify(this.elemento))
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
