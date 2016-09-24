import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent  {

  
          items: FirebaseListObservable<any[]>;
	    constructor(af: AngularFire) {
		        this.items = af.database.list('/items');
			  }
}
