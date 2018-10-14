import { Component } from '@angular/core';
import { ConfigServiceService } from './config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public configs = null;

  constructor(private configService: ConfigServiceService) {
    this.configs = configService.configurations;
  }
}
