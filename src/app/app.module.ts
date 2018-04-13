import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';

import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThreePage } from '../pages/three/three';
import { FourPage } from '../pages/four/four';
import { ArraysPage } from '../pages/arrays/arrays';
import { DirectivesPage } from '../pages/directives/directives';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    ThreePage,
    FourPage,
    FirstPage,
    ArraysPage,
    DirectivesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    ThreePage,
    FourPage,
    FirstPage,
    ArraysPage,
    DirectivesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
