import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_CONFIG, appConfig } from './app.config';
import { GroceriesModule } from '../groceries/groceries.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GroceriesModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_CONFIG, useValue: appConfig },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
