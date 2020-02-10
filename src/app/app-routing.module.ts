import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AquariumComponent } from './aquarium/aquarium.component';

const routes: Routes = [
  { path: 'aquariums', component: AquariumComponent },
  { path: '**', component: AquariumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
