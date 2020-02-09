import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './components/films/films.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';
import { StarshipUpdateComponent } from './components/starships/starship-update/starship-update.component';
import { MyStarshipsComponent } from './components/my-starships/my-starships.component';
import { MyStarshipInfoComponent } from './components/my-starships/my-starship-info/my-starship-info.component';
import { MyStarshipEditComponent } from './components/my-starships/my-starship-edit/my-starship-edit.component';

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
  },
  {
    path: 'my-starships/info/:id', component: MyStarshipInfoComponent
  },
  {
    path: 'my-starships/edit/:id', component: MyStarshipEditComponent
  }
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
