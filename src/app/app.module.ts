import { LOCALE_ID, NgModule } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, NgOptimizedImage, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonServicesModule } from './common-services';
import { MainModule } from './main';
import { AuthInterceptor, SecurityModule } from './security';
import { DemosComponent } from './demos/demos.component';
import GraficoSvgComponent from './grafico-svg/grafico-svg.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjaxWaitInterceptor } from './main/ajax-wait';
import { ContactosModule } from './contactos';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    GraficoSvgComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MainModule, CommonServicesModule, SecurityModule, MyCoreModule,
    ContactosModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
