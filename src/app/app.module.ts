import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';



import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';

//materialdesign
import {MdMenuModule} from '@angular2-material/menu/menu';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdCardModule} from '@angular2-material/card/card';
import {MdTabsModule} from '@angular2-material/tabs/tabs';

import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';

import {MdButtonModule} from '@angular2-material/button/button';

import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';


import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';

//materialdesign

import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';




// Must export the config

export const firebaseConfig = {
	 apiKey: "key",
	     authDomain: "key",
	         databaseURL: "key",
		     storageBucket: "key"
};







@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    AboutComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    routing,
        MdCardModule.forRoot(),
        MdTabsModule.forRoot(),

        MdIconModule.forRoot(),
    MdProgressCircleModule.forRoot(),

 MdSidenavModule.forRoot(),
     MdListModule.forRoot(),
MdButtonModule.forRoot(),


    MdToolbarModule.forRoot(),
    MdMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
