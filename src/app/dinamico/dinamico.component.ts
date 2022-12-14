import { Component } from '@angular/core';
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
    { title: 'Home', icon: '', component: HomeComponent},
    { title: 'Demos', icon: '', component: DemosComponent},
    { title: 'Gráfico', icon: '', component: GraficoSvgComponent},
  ]
  active: any = this.menu[0].component

  select(index: number) {
    this.active = this.menu[index].component
  }
}
