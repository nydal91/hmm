import { Component, OnInit, Injectable } from '@angular/core';
import {YoutubeService} from '../youtube.service';



import {Ytube} from '../video';   


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers:[YoutubeService]
})
export class YoutubeComponent implements OnInit {


    errorMessage: string;
        videos: Ytube[];
	    selectedID:string;
	        vidLink:string;
		    display:string;

		        constructor (private _youtubeService: YoutubeService) {}
			  
			    vidSelect(video: string) {
				            this.selectedID = video;
					            this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
						        }
							  
							    ngOnInit() { this.getVideos();}
							      
							        getVideos() {
									        this._youtubeService.getVideos()
										            .subscribe(
												                    videos => this.videos = videos,
															                    error => this.errorMessage = <any>error
														                );

																    }

																        goBack(){

																		        this.vidLink = null;

																			    }



}
