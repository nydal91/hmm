import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';



import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';

//materialdesign
import { MaterialModule } from '@angular/material';

//materialdesign

import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';




// Must export the config

export const firebaseConfig = {
	  apiKey: "",
	      authDomain: "",
	          databaseURL: "",
		      storageBucket: ""
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
            MaterialModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
