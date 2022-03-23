import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map/map.component';
environment

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken:'pk.eyJ1IjoiYWxleDVhbmRlciIsImEiOiJjbDEydmR1aXMzOGVnM2xvcHdobjd6dzlhIn0.hIqWvFm8sdNF_HbSWwpzeQ',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
