import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map/map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    GalleryComponent,
    ClientsComponent,
    HomeComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken:'pk.eyJ1IjoiYWxleDVhbmRlciIsImEiOiJjbDE4cHBsNm4wZmp4M2JteGk4a2RvbDBkIn0.9bH1y2cWAKnu0NFUJo2k_g',
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
