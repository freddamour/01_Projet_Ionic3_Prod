//import du core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//boot
import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ListPage } from './../pages/list/list'; // V2B: créer une appl ionic2-3 :Créer une page

//Composants
import { TitlePartialComponent } from './../components/title-partial/title-partial';

//Providers (services)
import { DataProvider } from '../providers/data/data';


@NgModule({
  // entré ici le nouveau composant créer ( mode manuel)
  declarations: [
    MyApp,
    HomePage,
    TitlePartialComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  
  //Entré ici les composants disponiblent pour le routage (nécessaire pour la navigation)
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}
