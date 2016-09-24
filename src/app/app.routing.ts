
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component'; 
import { YoutubeComponent }      from './youtube/youtube.component';

const appRoutes: Routes = [
	  {
		      path: 'videos',
		          component: YoutubeComponent
			    },



			    {
				        path: '',
					    redirectTo: '/intro',
					        pathMatch: 'full'
						  },


						  {
							      path: 'intro',
							          component: IntroComponent
								    },
			    {
			    path: 'about',
			    component: AboutComponent
			    
			    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
