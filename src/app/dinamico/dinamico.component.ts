import { Component } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';
import { HomeComponent } from '../main/home/home.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { title: 'Formulario', icon: 'fa-solid fa-chalkboard-user', component: FormularioComponent},
    { title: 'Home', icon: 'fa-solid fa-house', component: HomeComponent},
    { title: 'Demos', icon: 'fa-solid fa-chalkboard-user', component: DemosComponent},
    { title: 'Gráfico', icon: 'fa-regular fa-image', component: GraficoSvgComponent},
    { title: 'Calculadora', icon: 'fa-solid fa-calculator', component: CalculadoraComponent},
  ]
  active: any = this.menu[0].component

  select(index: number) {
    this.active = this.menu[index].component
  }
}
