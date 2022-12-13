import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Hola mundo';

  constructor(private notify: NotificationService, @Optional() log?: LoggerService) {
    // if (log) {
    //   log.error('Esto es un error')
    //   log.warn('Esto es un warn')
    //   log.info('Esto es un info')
    //   log.log('Esto es un log')
    // }
  }
  ngOnInit(): void {
    // this.notify.add('Ya me he inicializado', NotificationType.info)
  }
}
