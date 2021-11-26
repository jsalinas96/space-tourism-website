import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  }
  ,
  {
    path:'destination',
    loadChildren: () => import('./components/destination/destination.module').then(m => m.DestinationModule)
  },
  {
    path: 'crew',
    loadChildren: () => import('./components/crew/crew.module').then(m => m.CrewModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./components//technology/technology.module').then(m => m.TechnologyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
