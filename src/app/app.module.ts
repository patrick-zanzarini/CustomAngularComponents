import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouteModule } from './app.routes';
import { AppComponent } from './app.component';
import { PreviewModule } from './features/preview/preview.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    PreviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
