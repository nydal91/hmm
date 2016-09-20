import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {Ytube} from './video';


import { Observable } from 'rxjs';

 






@Injectable()
export class YoutubeService {




       constructor (private http: Http){}
         
           private ytubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&key=AIzaSyB78DMJw2MJx8hPnSSxhwOr8kaQcTE_mko';
	     
	       getVideos() {
		               return this.http.get(this.ytubeURL)
			                   .map(res => <Ytube[]> res.json().items)
					               .do(data => console.log(data))
						                   .catch(this.errorHandler);
								       }
								           private errorHandler (error: Response) {
										           console.error(error);
											           return Observable.throw(error.json().error || 'Server error');
												       }
												         




}
