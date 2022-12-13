import { Component, Optional } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(@Optional() log?: LoggerService) {
    if (log) {
      log.error('Esto es un error')
      log.warn('Esto es un warn')
      log.info('Esto es un info')
      log.log('Esto es un log')
    }
  }
}
