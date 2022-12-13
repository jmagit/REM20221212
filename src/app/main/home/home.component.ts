import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from '@my/core';
import { NotificationService } from 'src/app/common-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
