import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestPage } from '../pages/quest/quest';
import { Quest2Page } from '../pages/quest2/quest2';
import { Quest3Page } from '../pages/quest3/quest3';
import { Quest4Page } from '../pages/quest4/quest4';
import { Quest5Page } from '../pages/quest5/quest5';
import { ResultadoPage } from '../pages/resultado/resultado';
import { Quest6Page } from '../pages/quest6/quest6';
import { Quest7Page } from '../pages/quest7/quest7';
import { Quest8Page } from '../pages/quest8/quest8';
import { Quest9Page } from '../pages/quest9/quest9';
import { Quest10Page } from '../pages/quest10/quest10';
import { CreditosPage } from '../pages/creditos/creditos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestPage,
    Quest2Page,
    Quest3Page,
    Quest4Page,
    Quest5Page,
    Quest6Page,
    Quest7Page,
    Quest8Page,
    Quest9Page,
    Quest10Page,
    ResultadoPage,
    CreditosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestPage,
    Quest2Page,
    Quest3Page,
    Quest4Page,
    Quest5Page,
    Quest6Page,
    Quest7Page,
    Quest8Page,
    Quest9Page,
    Quest10Page,
    ResultadoPage,
    CreditosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
