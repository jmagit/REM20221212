import { Component } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';
import { HomeComponent } from '../main/home/home.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { title: 'Demos', icon: 'fa-solid fa-chalkboard-user', component: DemosComponent},
    { title: 'Home', icon: 'fa-solid fa-house', component: HomeComponent},
    { title: 'Gráfico', icon: 'fa-regular fa-image', component: GraficoSvgComponent},
    { title: 'Calculadora', icon: 'fa-solid fa-calculator', component: CalculadoraComponent},
  ]
  active: any = this.menu[0].component

  select(index: number) {
    this.active = this.menu[index].component
  }
}
