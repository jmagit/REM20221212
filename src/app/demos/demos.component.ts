import { Component, OnDestroy, OnInit } from '@angular/core';
import { CapitalizePipe, LoggerService } from '@my/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  providers: [ NotificationService ],
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable | undefined;
  private nombre = 'mundo';
  listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'barcelona' },
    { id: 3, nombre: 'SEVILLA' },
    { id: 4, nombre: 'ciudad Real' },
  ]
  idProvincia = 2
  fontSize = 24

  resultado = ''
  visible = true
  estetica = { importante: true, error: false, urgente: true }

  constructor(public vm: NotificationService, public out: LoggerService) { }

  get Nombre() { return this.nombre; }
  set Nombre(value: string) {
    if (this.nombre === value) return
    this.nombre = value
  }

  saluda() {
    this.resultado = `Hola ${this.Nombre}`
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  cambia() {
    this.visible = !this.visible
    this.estetica.importante = !this.estetica.importante
    this.estetica.error = !this.estetica.error
  }

  add(provincia: string) {
    const pipe = new CapitalizePipe();
    const id = this.listado.length > 0 ? this.listado[this.listado.length - 1].id + 1 : 1
    this.listado.push({ id, nombre: pipe.transform(provincia) })
    this.idProvincia = id
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripción: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    this.out.log('ngOnDestroy')
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

  idiomas = [
    { codigo: 'en-US', region: 'USA' },
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }


}
