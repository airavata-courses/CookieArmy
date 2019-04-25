import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
var firebaseConfig = {
  apiKey: "AIzaSyDg269XE3BRoMDSuvVJj6xlRJCLFqbLJVo",
  authDomain: "auth-770bb.firebaseapp.com",
  databaseURL: "https://auth-770bb.firebaseio.com",
  projectId: "auth-770bb",
  storageBucket: "auth-770bb.appspot.com",
  messagingSenderId: "988215790476"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
