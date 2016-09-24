import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


 items: FirebaseListObservable<any[]>;
             constructor(af: AngularFire) {
		                             this.items = af.database.list('/items');
					                               }



  ngOnInit() {
  }

}
