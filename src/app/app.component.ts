import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(router: Router) {
    if (environment.production) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', '/Captura' + event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      });
    }
  }
}
