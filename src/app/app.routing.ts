import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './components/films/films.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';
import { StarshipUpdateComponent } from './components/starships/starship-update/starship-update.component';
import { MyStarshipsComponent } from './components/my-starships/my-starships.component';

const appRoutes : Routes =  [
  {
    path: '', component: FilmsComponent
  },
  {
    path: 'film/starships', component: StarshipsListComponent
  },
  {
    path: 'film/:id/starships/list', component: StarshipsListComponent
  },
  {
    path: 'film/starships/info/:id', component: StarshipInfoComponent
  },
  {
    path: 'film/starships/edit/:id', component: StarshipUpdateComponent
  },
  {
    path: 'my-starships', component: MyStarshipsComponent
  }
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
