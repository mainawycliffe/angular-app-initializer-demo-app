import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigServiceService } from './config-service.service';

export function loadConfigurations(configService: ConfigServiceService) {
  return () => configService.getConfigs();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    ConfigServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [ConfigServiceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
