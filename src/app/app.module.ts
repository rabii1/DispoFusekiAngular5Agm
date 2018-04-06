import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {RestService} from './services/rest.service';

import {AgmCoreModule} from '@agm/core';
 //import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
// import {} from '@snazzy-info-window'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LoginComponent } from './login/login.component';
import {UserService} from './user.service';
import { MapContentComponent } from './map-content/map-content.component';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { MapContent2Component } from './map-content2/map-content2.component';



const Router: Routes = [

  {path:'', component : LoginComponent},

  {path:'home', component : HomeComponent }
  ]


 /* {path:'Projet1', component : HomeComponent},
  {path:'Projet2', component : HomeComponent},
0  {path:'Projet3', component : HomeComponent}*/





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapContentComponent,
    MapContent2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
    AgmCoreModule.forRoot({apiKey:'AIzaSyCN0WNdE20LrZPVbBwRs0m-YsE81oYPl8c',  libraries: ["places"] },
    ),
    AgmSnazzyInfoWindowModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [RestService, UserService,GoogleMapsAPIWrapper],     //add service to provider
  bootstrap: [AppComponent]
})
export class AppModule {


}
