import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { VideogamecreateComponent } from './components/videogamecreate/videogamecreate.component';
import { VideogameeditComponent } from './components/videogameedit/videogameedit.component';
import { VideogamelistComponent } from './components/videogamelist/videogamelist.component';

const routes: Routes = [
  { path: '',   redirectTo: '/videogamelist', pathMatch: 'full' },
  { path: 'videogamelist', component: VideogamelistComponent },
  { path: 'videogameedit/:id', component: VideogameeditComponent },
  { path: 'videogamecreate', component: VideogamecreateComponent },
  { path: 'accessdenied', component:AccessdeniedComponent},
  {path:'**', component:VideogamelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
